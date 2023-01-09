import GPT3Tokenizer from 'gpt3-tokenizer';
import { Configuration, OpenAIApi } from 'openai';
import { productsServices } from 'utils/products';

const API_TOKEN = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';

if (!API_TOKEN) {
  throw new Error('OpenAI API token is missing.');
}

const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });

const config = new Configuration({
  apiKey: API_TOKEN,
});

const openAi = new OpenAIApi(config);

export const generateTitleSummaryKeyPoints = async (text: string) => {
  const fullText = `Generate a title, a short summary, and key points from the following text: "${text}"`;
  const encoded = tokenizer.encode(fullText);
  const tokens = encoded.bpe;

  if (tokens.length > productsServices.transcription.maxAllowedTokens) {
    tokens.splice(
      encoded.bpe.length - productsServices.transcription.maxAllowedTokens,
      encoded.bpe.length - productsServices.transcription.maxAllowedTokens + 50,
    );
  }

  const prompt = tokenizer.decode(tokens);

  try {
    const results = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt,
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
