import { Text, Textarea } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import React, { FC } from 'react';
import { Project } from 'types';

type CommunityCommentsProps = {
  project: Project;
};

const CommunityComments: FC<CommunityCommentsProps> = ({ project }) => {
  return (
    <Paper>
      <div className="mb-4">
        <GradientText weight={700}>Community Comments on {project?.name}</GradientText>
      </div>

      <div>
        <div className="mb-4">
          <Textarea placeholder="Leave a comment..." />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>Emoji</div>
          <GradientButton>Post</GradientButton>
        </div>

        <div className="max-h-[400px] overflow-y-scroll">
          {Array(10)
            .fill(null)
            .map(() => {
              return (
                <div className="border-b py-4 mb-4">
                  <GradientText weight={700}>Anonymous Panda</GradientText>
                  <Text size="xs" color="dimmed" className="mb-2">
                    Nov 12
                  </Text>
                  <Text size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                </div>
              );
            })}
        </div>
      </div>
    </Paper>
  );
};

export default CommunityComments;
