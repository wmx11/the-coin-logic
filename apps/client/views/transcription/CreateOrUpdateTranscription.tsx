import { Container, FileInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AxiosResponse } from 'axios';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import GoBack from 'components/GoBack';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { SUPPORTED_VIDEO_AUDIO_FORMATS } from 'constants/files';
import { QUERY_PROJECT_ID } from 'constants/general';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { Icons } from 'utils/icons';
import { signedRequest } from 'utils/signedRequest';
import { handleErrorMessage, validateYouTubeUrl } from 'utils/utils';

const CreateOrUpdateTranscription = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      url: '',
      isPublic: true,
    },
  });

  const handleFilePreUpload = (file: File) => {
    if (!SUPPORTED_VIDEO_AUDIO_FORMATS.includes(file?.type.split('/')[1])) {
      toast.error('Unsupported file format.');
      return null;
    }

    setFile(file);
  };

  const handleYoutube = async (values: typeof form.values) => {
    if (!values.url) {
      toast.error('Please provide a YouTube URL');
      return null;
    }

    if (!validateYouTubeUrl(values.url)) {
      toast.error('Please provide a valid YouTube URL');
      return null;
    }

    const req = await signedRequest(
      {
        type: 'post',
        url: routes.api.transcribe.youtube,
        data: {
          url: values.url,
          projectId: router.query[QUERY_PROJECT_ID] || undefined,
          isPublic: values.isPublic,
        },
      },
      user?.id as string,
    );

    return req;
  };

  const handleUpload = async (values: typeof form.values) => {
    const fd = new FormData();
    fd.append('file', file as Blob);
    fd.append('projectId', router.query[QUERY_PROJECT_ID] as string);
    fd.append('isPublic', values.isPublic.toString());

    const req = await signedRequest(
      {
        type: 'post',
        url: routes.api.transcribe.upload,
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
      user?.id as string,
    );

    return req;
  };

  const handleSubmit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      let req: AxiosResponse<any, any> | null = null;

      if (!file) {
        req = await handleYoutube(values);
      }

      if (file) {
        req = await handleUpload(values);
      }

      setErrorMessage('');

      if (req) {
        router.push(routes.transcriptionId.replace('${id}', req?.data?.data?.id));
      }
    } catch (error) {
      handleErrorMessage(error, setErrorMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <SmallBackgroundWrapper>
        <GoBack />
        <div className="mb-8 text-center">
          <GradientTitle className="mb-4">Transcribe your audio file in minutes</GradientTitle>
          <Text size="sm" color="dimmed">
            Upload your audio or video file of the AMA, conference, or any other digital meeting. A transcription with a
            detailed summary, title, key points will be prepared for you. Notice: This process might take a while. It
            usually takes 10% of the total length of the file duration. For example, a 10 minute audio recording will
            approximately be transcribed in 1 minute.
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <Container size="xs" className="w-full">
              <div className="flex flex-col gap-4 justify-center items-center mb-4">
                <TextInput
                  {...form.getInputProps('url')}
                  label="YouTube video link"
                  description="Paste the URL of a YouTube video that you wish to transcribe"
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full"
                  size="md"
                  disabled={user === null}
                />
                <GradientText weight={600}>Or</GradientText>
                <div className="flex items-end gap-2 w-full">
                  <FileInput
                    value={file}
                    onChange={handleFilePreUpload}
                    label="Upload your audio file"
                    className="w-full"
                    placeholder="Click here to browse"
                    description={`Supported formats: ${SUPPORTED_VIDEO_AUDIO_FORMATS.join(' .')}`}
                    size="md"
                    icon={<Icons.Upload />}
                    disabled={user === null}
                  />
                  {file ? (
                    <GradientButton size="md" leftIcon={<Icons.Delete />} onClick={() => setFile(null)}>
                      Remove File
                    </GradientButton>
                  ) : null}
                </div>
              </div>

              <ErrorMessage message={errorMessage} />

              <div className="flex justify-end">
                {user ? (
                  <div>
                    {/* <Switch
                      {...form.getInputProps('isPublic', { type: 'checkbox' })}
                      label="Transcript is public"
                      description="A public transcript will be available to anyone. If you want to keep the transcript private, please uncheck this box. Private transcripts will be available only to your account."
                      color="violet"
                    /> */}
                    <div className="flex justify-end">
                      <GradientButton type="submit" loading={isLoading}>
                        {isLoading ? 'Uploading files...' : 'Next'}
                      </GradientButton>
                    </div>
                  </div>
                ) : (
                  <Text color="violet" size="sm">
                    You need to be logged in to use this feature
                  </Text>
                )}
              </div>
            </Container>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CreateOrUpdateTranscription;
