import axios from 'axios';
import { useState } from 'react';
import { signedRequest } from 'utils/signedRequest';
import useUser from './useUser';
import useRequireLogin from './useRequireLogin';
import routes from 'routes';

export type HandleViewAndLikeTypes = {
  articleId?: string;
  transcriptionId?: string;
  providerId?: string;
  quizId?: string;
};

type UseControlsProps = {
  initialLikes?: number;
  initialFollowers?: number;
};

type FollowersType = {
  count: number;
  type: 'connect' | 'disconnect' | null;
};

const useControls = ({ initialLikes, initialFollowers }: UseControlsProps) => {
  const { user } = useUser();
  const { requireLogin } = useRequireLogin();
  const [likes, setLikes] = useState<number | null>(initialLikes || 0);
  const [followers, setFollowers] = useState<FollowersType>({ count: initialFollowers || 0, type: null });

  const handleView = (id: HandleViewAndLikeTypes) => {
    try {
      axios.post(routes.api.controls.view, id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async (id: HandleViewAndLikeTypes) => {
    if (requireLogin()) {
      return false;
    }

    const { data } = await signedRequest(
      {
        type: 'post',
        url: routes.api.controls.like,
        data: {
          ...id,
          userId: user?.id as string,
        },
      },
      user?.id as string,
    );

    setLikes(data.data._count.likes as number);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (id: HandleViewAndLikeTypes) => {
    if (requireLogin()) {
      return false;
    }

    const { data } = await signedRequest(
      {
        type: 'post',
        url: routes.api.controls.follow,
        data: {
          ...id,
          userId: user?.id as string,
        },
      },
      user?.id as string,
    );

    setFollowers({
      count: data?.data?._count?.followers as number,
      type: data?.data?.connect ? 'connect' : data?.data?.disconnect ? 'disconnect' : null,
    });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return { followers, likes, handleView, handleLike, handleFollow };
};

export default useControls;
