import { Configuration, OpenAIApi } from 'openai';

const API_TOKEN = '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';

if (!API_TOKEN) {
  throw new Error('OpenAI API token is missing.');
}

const config = new Configuration({
  apiKey: API_TOKEN,
});

const openAi = new OpenAIApi(config);

(async () => {
  const prompt = `
  You are a professional data analyst.
  Generate an analytical report for the project "Titano".
  Provide an introduction, analytical overview where you discuss the changes that occured during the given time period, and conclusion.
  2023 January 1st
  price: $0.02
  market cap: $100000
  liquidity: $1000000
  discord members: 34000
  twitter members: 24102
  telegram mebmers: 20000
  holders: 72000
  community sentiment: 20/100
  2023 February 1st
  price: $0.0003
  market cap: $80000
  liquidity: $900000
  discord members: 32000
  twitter members: 21102
  telegram mebmers: 15000
  holders: 65000
  community sentiment: 80/100
  `;
  try {
    const results = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.7,
      best_of: 3,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
      max_tokens: 2048
    });

    console.log(results.data.choices[0].text);

    return results.data;
  } catch (error) {
    // const errors = error as AxiosError;
    // console.log(errors.response?.data);
  }
})();
