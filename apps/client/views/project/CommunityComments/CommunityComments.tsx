import { ScrollArea, Text, UnstyledButton } from '@mantine/core';
import CommentCard from 'components/Comments/CommentCard';
import CommentInput from 'components/Comments/CommentInput';
import GrayBox from 'components/GrayBox';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import { getProjectCommentsById, getProviderCommentsById } from 'data/getters/comments';
import useComments from 'hooks/useComments';
import { FC, useEffect } from 'react';
import useCommentsStore from 'store/useCommentsStore';
import { Project, Provider } from 'types';

type CommunityCommentsProps = {
  project?: Project;
  provider?: Provider;
};

const CommunityComments: FC<CommunityCommentsProps> = ({ project, provider }) => {
  const { page, comments, isLastPage, loadMoreComments, fetchComments } = useComments();
  const { recentComment } = useCommentsStore((state) => state);

  useEffect(() => {
    fetchComments((pagination) => {
      if (project) {
        return getProjectCommentsById({ id: project.id, ...pagination });
      }

      if (provider) {
        return getProviderCommentsById({ id: provider.id, ...pagination });
      }

      return new Promise((res) => res([[], 0]));
    });
  }, [page, recentComment]);

  return (
    <Paper>
      <div className="mb-2">
        <GradientText weight={700}>Community Discussion</GradientText>
      </div>

      <CommentInput projectId={project?.id} providerId={provider?.id} />

      {comments && comments.length ? (
        <div className="p-0">
          <ScrollArea style={{ height: 250 }} offsetScrollbars>
            {comments.map((comment) => {
              return <CommentCard comment={comment} key={`comment_${comment?.id}`} />;
            })}
            {!isLastPage ? (
              <UnstyledButton onClick={loadMoreComments} className="flex justify-center items-center w-full">
                <Text align="center" color="blue">
                  Load More Comments
                </Text>
              </UnstyledButton>
            ) : null}
          </ScrollArea>
        </div>
      ) : (
        <GrayBox>
          <Text size="sm" color="dimmed">
            Be the first one to leave a comment!
          </Text>
        </GrayBox>
      )}
    </Paper>
  );
};

export default CommunityComments;
