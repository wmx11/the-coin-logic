import { ActionIcon, Menu, Text } from '@mantine/core';
import useComments from 'hooks/useComments';
import useUser from 'hooks/useUser';
import { FC } from 'react';
import { Comment } from 'types';
import { Icons } from 'utils/icons';

type CommentControlsProps = {
  comment: Comment;
};
const CommentControls: FC<CommentControlsProps> = ({ comment }) => {
  const { user } = useUser();

  const {
    likeComment,
    comment: modifiedComment,
    reportComment,
    removeComment,
  } = useComments({ initialComment: comment });

  const commentData = modifiedComment || comment;

  return (
    <div className="flex justify-start gap-2 items-center">
      <div className="flex gap-2 items-center cursor-pointer">
        <Icons.Heart onClick={() => likeComment(commentData, user?.id as string)} className="hover:text-red-500" />
        <Text size="xs" color="dimmed">
          {commentData?.likesCount}
        </Text>
      </div>
      <div>
        <Menu shadow="md" withArrow>
          <Menu.Target>
            <ActionIcon>
              <Icons.Dots />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => reportComment(commentData, user?.id as string)}>Report</Menu.Item>
            {user && user?.isAdmin ? (
              <>
                <Menu.Divider />
                <Menu.Label>Admin Zone</Menu.Label>
                <Menu.Item color="red" onClick={() => removeComment(comment, user?.id as string)}>
                  Remove Comment
                </Menu.Item>
              </>
            ) : null}
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default CommentControls;
