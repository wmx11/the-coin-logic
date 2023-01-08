import axios from 'axios';

import { AssemblyResponse, AssemblyUploadResponse } from './AssemblyTypes';

const API_TOKEN = process.env.NEXT_PUBLIC_ASSEMBLY_API_KEY || '';

if (!API_TOKEN) {
  throw new Error('Assembly API token is missing.');
}

const assembly = axios.create({
  baseURL: 'https://api.assemblyai.com/v2',
  headers: {
    authorization: API_TOKEN,
  },
});

export const transcribe = (audioUrl: string, webhook?: string): Promise<{ data: AssemblyResponse }> | null => {
  if (!audioUrl) {
    console.error('Audio URL is missing.');
    return null;
  }

  try {
    return assembly.post('/transcript', {
      audio_url: audioUrl,
      summarization: true,
      summary_model: 'conversational',
      summary_type: 'bullets',
      format_text: true,
      punctuate: true,
      speaker_labels: true,
      webhook_url: webhook,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getTranscriptionById = (id: string): Promise<{ data: AssemblyResponse }> | null => {
  if (!id) {
    console.error('ID is missing.');
    return null;
  }

  try {
    return assembly.get(`/transcript/${id}`);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const upload = (data: unknown): Promise<{ data: AssemblyUploadResponse }> | null => {
  if (!data) {
    console.error('Audio URL is missing.');
    return null;
  }

  try {
    return assembly.post('/upload', data, { headers: { 'transfer-encoding': 'chunked' } });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const handleYouTubeVideoRequest = (youtubeUrl: string) => {
  if (!youtubeUrl) {
    console.error('Missin YouTube video URL');
    return null;
  }
};
export const handleFileUploadRequest = () => {};
