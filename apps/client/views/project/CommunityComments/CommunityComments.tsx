import { Button, ScrollArea, Text, UnstyledButton } from '@mantine/core';
import CommentCard from 'components/Comments/CommentCard';
import CommentInput from 'components/Comments/CommentInput';
import GrayBox from 'components/GrayBox';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import { getProjectCommentsById } from 'data/getters/comments';
import useComments from 'hooks/useComments';
import { FC, useEffect } from 'react';
import useCommentsStore from 'store/useCommentsStore';
import { Project } from 'types';

type CommunityCommentsProps = {
  project: Project;
};

const CommunityComments: FC<CommunityCommentsProps> = ({ project }) => {
  const { page, comments, isLastPage, loadMoreComments, fetchComments } = useComments();
  const { recentComment } = useCommentsStore((state) => state);

  useEffect(() => {
    fetchComments((pagination) => getProjectCommentsById({ id: project.id, ...pagination }));
  }, [page, recentComment]);
  

  return (
    <Paper>
      <div className="mb-2">
        <GradientText weight={700}>Community Discussion</GradientText>
      </div>

      <CommentInput projectId={project.id} />

      {comments && comments.length ? (
        <div className="bg-zinc-50 p-2">
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
