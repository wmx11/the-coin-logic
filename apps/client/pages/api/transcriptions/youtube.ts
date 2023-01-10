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

    if (!user?.serviceTokens || (user?.serviceTokens?.amount as number)) {
      const length = parseInt(videoLength, 10);

      const requiredTokens =
        length * productsServices.transcription.audioTokens +
        productsServices.transcription.textTokens *
          ((length * productsServices.transcription.approxWordsInMinute) /
            productsServices.transcription.minuteVideoDuration);

      if (!user?.serviceTokens || ((user?.serviceTokens?.amount as number) || 0) < requiredTokens) {
        return responseHandler.badRequest(
          `You do not have enough tokens to transcribe this video. You need approximately ${toLocaleString(
            requiredTokens,
          )} tokens. Your current balance is ${toLocaleString(
            user?.serviceTokens?.amount as number,
          )}. Please fund your account in order to proceed.`,
        );
      }
    }

    try {
      const fileName = `${crypto.randomUUID()}.mp4`;
      const pathName = path.resolve(process.cwd(), 'tmp');
      const stream = fs.createWriteStream(`${pathName}/${fileName}`);

      const videoUploadPromise = new Promise((resolve, reject) => {
        ytdl(url, { quality: 'highestaudio', filter: 'audioonly' }).pipe(stream);

        stream.on('finish', () => {
          return resolve(`${pathName}/${fileName}`);
        });

        stream.on('error', (error) => {
          return reject(error);
        });
      });

      const filePath = await videoUploadPromise;

      const videoTranscribePromise = new Promise((resolve: (data: { id: string }) => void, reject) => {
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

            resolve(transcription as { id: string });
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

      return responseHandler.ok({ id: results?.id }, fileName);
    } catch (error) {
      return responseHandler.badRequest(`Sorry, there has been an error... ${error}`);
    }
  };

  return requestHandler.signedPost(uploadYoutubeVideo);
};

export default handler;
