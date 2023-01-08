import { Container, Text, Textarea, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { CKEditor, CKEditorEventPayload } from 'ckeditor4-react';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import ImageUpload from 'components/ImageUpload';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_PROJECT } from 'constants/general';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { Content } from 'types';
import { signedRequest } from 'utils/signedRequest';
import { z } from 'zod';

type CreateOrUpdateArticleProps = {
  article?: Content;
  isUpdate?: boolean;
};

const CreateOrUpdateArticle: FC<CreateOrUpdateArticleProps> = ({ article, isUpdate }) => {
  const router = useRouter();
  const { user } = useUser();
  const [editor, setEditor] = useState<CKEditorEventPayload<'instanceReady'>>();
  const [imageData, setImageData] = useState<Blob>();

  const content = (() => {
    try {
      return JSON.parse(article?.richContent);
    } catch (error) {
      return '';
    }
  })();

  const form = useForm({
    validate: zodResolver(
      z.object({
        title: z.string().min(3, { message: 'Please provide a valid title.' }),
        summary: z.string().min(20, { message: 'Please provide a summary of at least 20 characters.' }),
      }),
    ),
    initialValues: {
      title: article?.title || '',
      summary: article?.summary || '',
      richContent: content || '',
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const editorData = JSON.stringify(editor?.editor?.getData());

      const fd = new FormData();

      fd.append('projectSlug', router.query[QUERY_PROJECT] as string);
      fd.append('articleId', article?.id as string);
      fd.append('title', values.title);
      fd.append('summary', values.summary);
      fd.append('content', editorData);
      fd.append('userId', user?.id as string);
      fd.append('image', imageData as Blob);
      fd.append('isUpdate', isUpdate ? 'true' : 'false');

      const { data } = await signedRequest(
        {
          type: 'post',
          data: fd,
          url: routes.api.article.createUpdate,
          headers: { 'Content-Type': 'multipart/form-data' },
        },
        user?.id as string,
      );

      toast.success(`Your content has been ${isUpdate ? 'updated' : 'created'}`);

      if (isUpdate) {
        return router.push(`${routes.blogPost.replace('${slug}', data?.data?.slug)}`);
      }

      router.back();
    } catch (error) {
      toast.error('There has been an issue while submitting the content.');
      console.log(error);
    }
  };

  return (
    <>
      <SmallBackgroundWrapper>
        <GoBack />
        <div className="mb-8 text-center">
          <GradientTitle>{isUpdate ? 'Update an' : 'Create a new'} article</GradientTitle>
          {isUpdate ? null : (
            <Text size="xs" color="dimmed">
              Create a new article for the project. AMA summaries, reviews, news, announcements.
            </Text>
          )}
        </div>
      </SmallBackgroundWrapper>

      <Container className="py-10">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <TextInput label="Title" required withAsterisk {...form.getInputProps('title')} />
            <ImageUpload
              label="Header Image"
              previewTetxt="Upload a header image. 800 x 450"
              accept="image/jpeg,image/png,image/jpg"
              size={{ width: 800, height: 450, maxHeigth: '', maxWidth: '' }}
              setImageBlob={(image: Blob) => setImageData(image)}
              initialImageUrl={article?.image?.url || ''}
            />
            <Textarea
              label="Summary"
              required
              withAsterisk
              description="Provide a short summary of the content"
              minRows={5}
              {...form.getInputProps('summary')}
            />
            <CKEditor
              initData={form.values.richContent || ''}
              onInstanceReady={(data) => {
                setEditor(data);
              }}
            />
            <GradientButton type="submit">{isUpdate ? 'Update' : 'Create'}</GradientButton>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CreateOrUpdateArticle;
