import { Chip, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import useComments from 'hooks/useComments';
import useUser from 'hooks/useUser';
import { FC, useRef } from 'react';
import { toast } from 'react-toastify';
import { Icons } from 'utils/icons';
import EmojiSelector from './EmojiSelector';

type CommentInputProps = {
  projectId?: string;
  providerId?: string;
};

const CommentInput: FC<CommentInputProps> = ({ projectId, providerId }) => {
  const { user } = useUser();
  const { postComment, loading } = useComments();
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const form = useForm({
    initialValues: {
      content: '',
      sentiment: '1',
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const data = await postComment({ ...values, userId: user?.id as string, projectId, providerId });

      if (!data) {
        return;
      }

      form.reset();
      toast.success('Comment posted!');
    } catch (error) {
      toast.error('There has been an issue while submitting your comment');
    }
  };

  return (
    <div className="relative">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="mb-2">
          <Chip.Group position="left" {...form.getInputProps('sentiment')}>
            <Chip
              value="1"
              color="teal"
              variant="outline"
              size="xs"
              radius="sm"
              styles={{ checkIcon: { display: 'none' }, iconWrapper: { display: 'none' } }}
            >
              <div className="flex gap-2 items-center text-green-500">
                <Icons.TrendUp /> Bullish
              </div>
            </Chip>
            <Chip
              value="0"
              color="red"
              variant="outline"
              size="xs"
              radius="sm"
              styles={{ checkIcon: { display: 'none' }, iconWrapper: { display: 'none' } }}
            >
              <div className="flex gap-2 items-center text-red-500">
                <Icons.TrendDown />
                Bearish
              </div>
            </Chip>
          </Chip.Group>
        </div>

        <div className="mb-4">
          <Textarea placeholder="Leave a comment..." minRows={3} {...form.getInputProps('content')} ref={ref} />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-lg cursor-pointer">
            <EmojiSelector inputRef={ref} form={form} inputName="content" />
          </div>
          <GradientButton type="submit" loading={loading}>
            Post
          </GradientButton>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
