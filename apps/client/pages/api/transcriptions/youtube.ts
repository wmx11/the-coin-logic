import crypto from 'crypto';
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import routes from 'routes';
import { prismaClient } from 'tcl-packages/prismaClient';
import { transcribe, upload } from 'utils/audioTranscription/assembly';
import { productsServices } from 'utils/products';
import toLocaleString from 'utils/toLocaleString';
import ytdl from 'ytdl-core';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const uploadYoutubeVideo = async (auth: Auth) => {
    const { url, projectId, isPublic } = req.body;

    if (!url) {
      return responseHandler.badRequest('Missing URL');
    }

    const user = await prismaClient?.user.findUnique({
      where: {
        id: auth.id,
      },
      select: {
        serviceTokens: true,
      },
    });

    const videoLength = (await ytdl.getBasicInfo(url)).videoDetails.lengthSeconds;

    if (!user || (user?.serviceTokens?.amount as number)) {
      const length = parseInt(videoLength, 10);

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

    const fileName = `${crypto.randomUUID()}.mp4`;
    const pathName = path.resolve(process.cwd(), 'tmp');
    const stream = fs.createWriteStream(`${pathName}/${fileName}`);

    const videoUploadPromise = new Promise((resolve, reject) => {
      ytdl(url, { quality: 'highestaudio' }).pipe(stream);

      stream.on('finish', () => {
        return resolve(`${pathName}/${fileName}`);
      });

      stream.on('error', (error) => {
        return reject(error);
      });
    });

    const filePath = await videoUploadPromise;

    const videoTranscribePromise = new Promise((resolve, reject) => {
      fs.readFile(filePath as string, async (err, data) => {
        if (err) {
          return reject(err);
        }

        try {
          const uploadResponse = await upload(data);

          const uploadUrl = uploadResponse?.data?.upload_url;

          const transcription = await prismaClient?.transcription.create({
            data: {
              contentUrl: url || '',
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

    fs.unlink(filePath as string, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return responseHandler.ok(results, fileName);
  };

  return requestHandler.signedPost(uploadYoutubeVideo);
};

export default handler;
