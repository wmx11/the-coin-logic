export type AssemblyResponse = {
  id: string;
  status: 'queued' | 'processing' | 'completed' | 'error';
  error: string;
  acoustic_model: string;
  audio_duration: number | null;
  audio_url: string;
  confidence: number | null;
  dual_channel: null;
  format_text: boolean;
  language_model: string;
  punctuate: boolean;
  text: string | null;
  summary: string;
  utterances: string[];
  webhook_status_code: string | null;
  webhook_url: string | null;
  words: {
    confidence: number;
    end: number;
    start: number;
    text: string;
  }[];
};

export type AssemblyUploadResponse = { upload_url: string };
