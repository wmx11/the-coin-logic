import { Configuration, OpenAIApi } from 'openai';
import { productsServices } from 'utils/products';

const API_TOKEN = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';

if (!API_TOKEN) {
  throw new Error('OpenAI API token is missing.');
}

const config = new Configuration({
  apiKey: API_TOKEN,
});

const openAi = new OpenAIApi(config);

export const generateTitleSummaryKeyPoints = async (text: string) => {
  try {
    const results = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate a title, a short summary, and key points from the following text: "${text}"`,
      temperature: 0.7,
      best_of: 3,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
      max_tokens: productsServices.transcription.maxTokens,
    });
    return results.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
