import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import useCommentsStore from 'store/useCommentsStore';
import { Comment } from 'types';
import { signedRequest } from 'utils/signedRequest';
import usePagination, { Pagination } from './usePagination';
import useRequireLogin from './useRequireLogin';
import { unionBy, orderBy } from 'lodash';
import { PER_PAGE } from 'constants/general';

type UseCommentsProps = {
  initialComment?: Comment;
};

type PostComment = {
  content: string;
  sentiment?: string;
  userId: string;
  projectId?: string;
  providerId?: string;
};

const useComments = (data?: UseCommentsProps) => {
  const [loading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>();
  const [commentsCount, setCommentsCount] = useState(0);
  const [comment, setComment] = useState<Comment | undefined>(data?.initialComment);
  const { page, nextPage: loadMoreComments, getPagination, setCount } = usePagination({ perPageCount: PER_PAGE });
  const { setRecentComment, resetRecentComment } = useCommentsStore((state) => state);
  const { requireLogin } = useRequireLogin();

  useEffect(() => {
    setCount(commentsCount);
  }, [commentsCount]);

  const postComment = async ({ content, sentiment, userId, projectId, providerId }: PostComment) => {
    if (requireLogin()) {
      return false;
    }

    setIsLoading(true);

    try {
      const { data } = await signedRequest<PostComment>(
        {
          type: 'post',
          url: routes.api.comments.post,
          data: {
            content,
            sentiment,
            userId,
            projectId,
            providerId,
          },
        },
        userId,
      );

      setComment(data?.data);
      setIsLoading(false);
      setRecentComment(data?.data?.id);
      return true;
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  const fetchComments = async (
    fetcher: (pagination: Pagination) => Promise<[Comment[], number]>,
  ): Promise<void | null> => {
    if (!fetcher) {
      return null;
    }

    setIsLoading(true);
    try {
      const [data, count] = await fetcher(getPagination());
      setComments((prevComments) => {
        const newComments = prevComments ? orderBy(unionBy(prevComments, data, 'id'), 'dateAdded', 'desc') : data;
        return newComments;
      });
      setCommentsCount(count);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  const likeComment = async (comment: Comment, userId: string) => {
    if (requireLogin()) {
      return false;
    }

    setIsLoading(true);
    try {
      const { data } = await signedRequest<{ id: string; userId: string }>(
        {
          type: 'post',
          url: routes.api.controls.like,
          data: {
            commentId: comment.id,
            userId,
          },
        },
        userId,
      );

      setComment({ ...comment, likesCount: data?.data?._count?.likes });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  const reportComment = async (comment: Comment, userId: string) => {
    if (requireLogin()) {
      return false;
    }

    setIsLoading(true);
    try {
      const { data } = await signedRequest<{ id: string; userId: string }>(
        {
          type: 'post',
          url: routes.api.comments.report,
          data: {
            id: comment.id,
            userId,
          },
        },
        userId,
      );

      setComment({ ...comment, reportsCount: data?.data?._count?.reports });
      toast.success('The comment was reported.');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  const removeComment = async (comment: Comment, userId: string) => {
    if (requireLogin()) {
      return false;
    }

    setIsLoading(true);
    try {
      setRecentComment(comment?.id);

      await signedRequest<{ id: string; userId: string }>(
        {
          type: 'post',
          url: routes.api.comments.remove,
          data: {
            id: comment.id,
          },
        },
        userId,
      );

      setComment(undefined);
      toast.success('The comment was removed.');
      setIsLoading(false);
      resetRecentComment();
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  return {
    comments,
    comment,
    loading,
    commentsCount,
    page,
    isLastPage: getPagination().isLastPage,
    getPagination,
    loadMoreComments,
    postComment,
    likeComment,
    reportComment,
    removeComment,
    fetchComments,
  };
};

export default useComments;
