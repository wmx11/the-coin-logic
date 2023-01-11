import { Badge, Spoiler, Text } from '@mantine/core';
import GradientText from 'components/Text/GradientText';
import React, { FC, useState } from 'react';
import { Comment } from 'types';
import { formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';
import { addLinksToText } from 'utils/utils';
import CommentControls from './CommentControls';
import Paper from 'components/Paper';

type CommentCard = {
  comment: Comment;
};

const CommentCard: FC<CommentCard> = ({ comment }) => {
  const REPORTS_COUNT_TO_HIDE = 15;
  const [hidden, seHidden] = useState((comment?.reportsCount as number) >= REPORTS_COUNT_TO_HIDE);

  return (
    <Paper className="mb-4">
      {hidden ? (
        <>
          <Text size="sm" color="dimmed" className="mb-2">
            The comment was hidden due to amount of reports
          </Text>
          <Text size="sm" color="blue" className="mb-2 cursor-pointer" onClick={() => seHidden(false)}>
            Show comment
          </Text>
        </>
      ) : (
        <>
          {' '}
          <div className="flex items-center justify-between gap-2">
            <GradientText weight={700}>{comment?.user?.name}</GradientText>
            <Badge size="sm" radius="md" color={comment?.sentiment === 1 ? 'teal' : 'red'} variant="filled">
              <div className="flex gap-2 items-center text-white">
                {comment?.sentiment === 1 ? <Icons.TrendUp /> : <Icons.TrendDown />}
                {comment?.sentiment === 1 ? 'Bullish' : 'Bearish'}
              </div>
            </Badge>
          </div>
          <div className="mb-4">
            <Text size="xs" color="dimmed" className="mb-2">
              {formateDateWithHours(comment?.dateAdded)}
            </Text>
            <Text size="sm">
              <Spoiler showLabel="Show more" hideLabel="Hide" maxHeight={150}>
                <div
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: addLinksToText(comment?.content) }}
                ></div>
              </Spoiler>
            </Text>
          </div>
          <CommentControls comment={comment} />
        </>
      )}
    </Paper>
  );
};

export default CommentCard;
