import { SUPPORTED_VIDEO_AUDIO_FORMATS } from 'constants/files';
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import fs from 'fs';
import { getVideoDurationInSeconds } from 'get-video-duration';
import { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import { prismaClient } from 'tcl-packages/prismaClient';
import { transcribe, upload } from 'utils/audioTranscription/assembly';
import { productsServices } from 'utils/products';
import toLocaleString from 'utils/toLocaleString';

type Fields = {
  projectId: string;
  isPublic: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const uploadFile = async (auth: Auth) => {
    const formData = await handleFormData<Fields>(req);

    if (!formData) {
      return responseHandler.forbidden();
    }

    const { projectId, isPublic } = formData.fields;
    const { file } = formData.files;

    if (!file || !file.path) {
      return responseHandler.badRequest('File not found.');
    }

    const splitFilename = file.originalFilename.split('.');
    const extension = splitFilename[splitFilename.length - 1];

    if (!SUPPORTED_VIDEO_AUDIO_FORMATS.includes(extension)) {
      return responseHandler.badRequest(`.${extension} is not a supported file format.`);
    }

    const user = await prismaClient?.user.findUnique({
      where: {
        id: auth.id,
      },
      select: {
        serviceTokens: true,
      },
    });

    const length = await getVideoDurationInSeconds(file?.path as string);

    if (!user || (user?.serviceTokens?.amount as number)) {
      const requiredTokens =
        length * productsServices.transcription.audioTokens +
        productsServices.transcription.textTokens *
          ((length * productsServices.transcription.approxWordsInMinute) /
            productsServices.transcription.minuteVideoDuration);

      if ((user?.serviceTokens?.amount as number) < requiredTokens) {
        return responseHandler.badRequest(
          `You do not have enough tokens to transcribe this video. You need approximately ${toLocaleString(
            requiredTokens,
          )} tokens. Your current balance is ${toLocaleString(
            user?.serviceTokens?.amount as number,
          )}. Please fund your account in order to proceed.`,
        );
      }
    }

    const videoTranscribePromise = new Promise((resolve, reject) => {
      fs.readFile(file.path as string, async (err, data) => {
        if (err) {
          return reject(err);
        }

        try {
          const uploadResponse = await upload(data);

          const uploadUrl = uploadResponse?.data?.upload_url;

          const transcription = await prismaClient?.transcription.create({
            data: {
              projectId: projectId || undefined,
              isPublic: isPublic || true,
              userId: auth.id,
            },
            select: {
              id: true,
            },
          });

          const transcribeResponse = await transcribe(
            uploadUrl as string,
            `${routes.api.transcribe.check}?id=${transcription?.id}`,
          );

          await prismaClient?.transcription.update({
            where: {
              id: transcription?.id,
            },
            data: {
              transcriptionId: transcribeResponse?.data.id,
            },
          });

          resolve(transcription);
        } catch (error) {
          return reject(error as string);
        }
      });
    });

    const results = await videoTranscribePromise;

    fs.unlink(file.path as string, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return responseHandler.ok(results, file.originalFilename);
  };

  return requestHandler.signedPost(uploadFile);
};

export default handler;

export const config = formDataConfig;
