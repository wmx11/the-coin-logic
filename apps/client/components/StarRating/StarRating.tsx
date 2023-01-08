import { Rating, Text } from '@mantine/core';
import useVotes from 'hooks/useVotes';
import { FC, useCallback, useEffect } from 'react';
import useUserStore from 'store/useUserStore';
import toLocaleString from 'utils/toLocaleString';

type StarRatingProps = {
  rating?: number;
  providerId?: string;
  readOnly?: boolean;
};

const StarRating: FC<StarRatingProps> = ({ rating, providerId, readOnly }) => {
  const { user } = useUserStore((state) => state);
  const { ratings, fetchRatings, rateSecure, hasVoted } = useVotes();

  const handleChange = async (value: number) => {
    if (ratings?.hasVoted) {
      return;
    }
    await rateSecure({ type: 'rating', value, providerId: providerId });
  };

  const getRatings = useCallback(async () => {
    await fetchRatings({ userId: user?.id, providerId });
  }, [hasVoted]);

  useEffect(() => {
    getRatings();
  }, [hasVoted]);

  return (
    <div className="flex items-center gap-2">
      <Rating
        value={readOnly || ratings?.hasVoted ? ratings?.averageRating : 0}
        onChange={handleChange}
        readOnly={readOnly || ratings?.hasVoted}
      />
      <Text size="xs" color="dimmed">
        ({toLocaleString(ratings?.votesCount || rating || 0)})
      </Text>
    </div>
  );
};

export default StarRating;
