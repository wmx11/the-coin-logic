import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { signedRequest } from 'utils/signedRequest';
import useRequireLogin from './useRequireLogin';
import useUser from './useUser';

type IdValues = {
  userId?: string;
  projectId?: string;
  providerId?: string;
};

type VoteTypes = {
  type: 'vote' | 'rating' | 'transparency';
};

type VoteValues = {
  value: number;
  isStartOfDay?: boolean;
} & IdValues &
  VoteTypes;

export type VoteReturnType = {
  positive: number;
  negative: number;
  total: number;
  positivePercentage: number;
  negativePercentage: number;
};

export type RateReturnType = {
  hasVoted: boolean;
  votesCount: number;
  averageRating: number;
};

const useVotes = () => {
  const [loading, setLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [canVote, setCanVote] = useState(true);
  const [votes, setVotes] = useState<VoteReturnType>();
  const [ratings, setRatings] = useState<RateReturnType>();
  const { user } = useUser();
  const { requireLogin } = useRequireLogin();

  const fetchVotes = async (values: Omit<VoteValues, 'value'>) => {
    setLoading(true);
    try {
      const { data } = await axios.post(routes.api.votes.getVotes, { ...values });
      setVotes(data?.data?.votes as VoteReturnType);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchRatings = async (values: IdValues) => {
    setLoading(true);
    try {
      const { data } = await axios.post(routes.api.votes.getRatings, { ...values });
      setRatings(data?.data as RateReturnType);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const canUserVoteToday = async (values: IdValues & VoteTypes) => {
    setLoading(true);
    try {
      const { data } = await axios.post(routes.api.votes.voteCheck, { ...values, userId: user?.id });
      setCanVote(data?.data?.canVote);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const vote = async (values: VoteValues) => {
    setLoading(true);
    try {
      await axios.post(routes.api.votes.vote, {
        ...values,
        userId: user?.id,
      });
      setLoading(false);
      setCanVote(false);
      setHasVoted(true);
    } catch (error) {
      setLoading(false);
    }
  };

  const voteSecure = async (values: VoteValues) => {
    if (requireLogin()) {
      return false;
    }

    setLoading(true);

    try {
      await signedRequest(
        { type: 'post', url: routes.api.votes.secureVote, data: { ...values, userId: user?.id } },
        user?.id as string,
      );
      setLoading(false);
      setCanVote(false);
      setHasVoted(true);
    } catch (error) {
      setLoading(false);
    }
  };

  const recalculateTransparency = async ({ rating, id }: { rating: number; id: string }) => {
    if (requireLogin()) {
      return false;
    }

    setLoading(true);

    try {
      await signedRequest(
        { type: 'post', url: routes.api.project.transparency.recalculate, data: { rating, id, userId: user?.id } },
        user?.id as string,
      );
      setLoading(false);
      toast.success('Transparency score recalculated successfully');
    } catch (error) {
      setLoading(false);
    }
  };

  const rateProjectAsTcl = async ({
    rating,
    id,
    transparencyHighlights,
  }: {
    rating: number;
    id: string;
    transparencyHighlights?: string;
  }) => {
    if (requireLogin()) {
      return false;
    }

    setLoading(true);

    try {
      await signedRequest(
        {
          type: 'post',
          url: routes.api.project.transparency.rate,
          data: { rating, id, transparencyHighlights, userId: user?.id },
        },
        user?.id as string,
      );
      setLoading(false);
      toast.success('TCL score updated successfully');
    } catch (error) {
      setLoading(false);
    }
  };

  const rateSecure = async (values: VoteValues) => {
    if (requireLogin()) {
      return false;
    }

    setLoading(true);

    try {
      await signedRequest(
        { type: 'post', url: routes.api.votes.secureRate, data: { ...values, userId: user?.id } },
        user?.id as string,
      );
      setLoading(false);
      setHasVoted(true);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    ratings,
    votes,
    canVote,
    loading,
    hasVoted,
    fetchRatings,
    fetchVotes,
    canUserVoteToday,
    vote,
    voteSecure,
    recalculateTransparency,
    rateProjectAsTcl,
    rateSecure,
  };
};

export default useVotes;
