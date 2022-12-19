import axios from 'axios';
import { useState } from 'react';
import { signedRequest } from 'utils/signedRequest';
import useUser from './useUser';
import useRequireLogin from './useRequireLogin';

const useControls = (initialLikes: number) => {
  const { user } = useUser();
  const { requireLogin } = useRequireLogin();
  const [likes, setLikes] = useState<number | null>(initialLikes);

  const handleView = (id: string, url: string) => {
    try {
      axios.post(url, { id });
    } catch (error) {}
  };

  const handleLike = async (id: string, url: string) => {
    if (requireLogin()) {
      return false;
    }

    const { data } = await signedRequest(
      {
        type: 'post',
        url,
        data: {
          id,
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

  return { likes, handleView, handleLike };
};

export default useControls;
