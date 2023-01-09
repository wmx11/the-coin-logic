import request from 'data/api/request';
import { response } from 'data/api/response';
import { NextApiRequest, NextApiResponse } from 'next';
import slug from 'slug';
import { prismaClient } from 'tcl-packages/prismaClient';
import { getTranscriptionById } from 'utils/audioTranscription/assembly';
import { productsServices } from 'utils/products';
import { generateTitleSummaryKeyPoints } from 'utils/textGeneration/openai';
import { msToTime } from 'utils/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const handleWebhook = async () => {
    const { id } = req.query;
    const { transcript_id } = req.body;

    if (!transcript_id || !id) {
      return responseHandler.ok({}, 'Missing arguments');
    }

    const existingTranscript = await prismaClient?.transcription.findUnique({
      where: { id: id as string },
    });

    if (existingTranscript?.content && existingTranscript.slug) {
      return responseHandler.ok({ redirect: existingTranscript.slug });
    }

    const data = await getTranscriptionById(transcript_id);

    if (!data) {
      return responseHandler.ok({}, 'No data found');
    }

    if (data.data.status !== 'completed') {
      if (data.data.status === 'error') {
        await prismaClient?.transcription.delete({
          where: {
            id: id as string,
          },
        });
      }

      return responseHandler.ok({ status: data.data.status }, data.data.error);
    }

    const { text, summary, audio_duration, utterances, words } = data.data;

    try {
      const results = await generateTitleSummaryKeyPoints(text as string);
      const generatedText = results?.choices[0].text;
      const title = generatedText?.trim().split('\n')[0].replace('Title: ', '');

      const content = {
        text: text,
        summary: summary,
        duration: audio_duration,
        utterances: utterances,
        wordCount: words.length,
        generatedText,
      };

      const updatedTranscript = await prismaClient?.transcription.update({
        where: {
          id: (existingTranscript?.id as string) || undefined,
        },
        data: {
          title,
          slug: slug(title as string),
          summary: data.data.summary,
          content: content,
        },
        select: {
          user: {
            include: {
              serviceTokens: true,
            },
          },
          slug: true,
        },
      });

      const tokensUsed =
        ((content?.duration as number) || 0) * productsServices.transcription.audioTokens +
        productsServices.transcription.textTokens * (results?.usage?.total_tokens as number);

      const serviceToken = await prismaClient?.serviceToken.update({
        where: {
          id: updatedTranscript?.user?.serviceTokens?.id as string,
        },
        data: {
          amount: (updatedTranscript?.user?.serviceTokens?.amount as number) - tokensUsed,
        },
      });

      await prismaClient?.serviceTokenUsage.create({
        data: {
          used: tokensUsed,
          description: `Transcription. Duration: ${msToTime((content?.duration as number) * 1000)}. Words: ${
            words.length
          }. Title: ${title}`,
          serviceTokenId: serviceToken?.id,
        },
      });

      return responseHandler.ok({ redirect: updatedTranscript?.slug });
    } catch (error) {
      console.log(error);
      return responseHandler.ok({ error: error });
    }
  };

  return requestHandler.post(handleWebhook);
};

export default handler;
