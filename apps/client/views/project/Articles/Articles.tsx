import BlogPostCard from 'components/BlogPosts/BlogPostCard';
import GradientButton from 'components/Buttons/GradientButton';
import GrayBox from 'components/GrayBox';
import TitleWithIcon from 'components/TitleWithIcon';
import { QUERY_PROJECT } from 'constants/general';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import useUserStore from 'store/useUserStore';
import { Project } from 'types';
import { Icons } from 'utils/icons';

type ArticlesProps = {
  data: Project;
};

const Articles: FC<ArticlesProps> = ({ data }) => {
  const { isProjectEditor, user } = useUserStore((state) => state);
  const { content: blogPosts, slug, id } = data;

  return (
    <div>
      <TitleWithIcon title="Related Content" Icon={Icons.Article} />
      {user && isProjectEditor(user, id) ? (
        <div className="mb-4">
          <Link href={`${routes.articleCreate}?${QUERY_PROJECT}=${slug}`} passHref>
            <GradientButton component="a" leftIcon={<Icons.Add />}>
              Create New
            </GradientButton>
          </Link>
        </div>
      ) : null}

      <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
        {blogPosts && blogPosts.length ? (
          <div className="flex gap-4 flex-col md:flex-row">
            {blogPosts.map((content, index) => (
              <BlogPostCard data={content} key={`blog_post_${index}`} />
            ))}
          </div>
        ) : (
          <GrayBox className="flex-1">No articles here 😮</GrayBox>
        )}
        {blogPosts && blogPosts.length ? (
          <div className="flex gap-2 items-center text-sm text-violet mt-8 md:mt-0">
            <Link href={`${routes.articles}?${QUERY_PROJECT}=${slug}`}>
              <a>See more</a>
            </Link>
            <div className="mt-1">
              <Icons.ChevronRight />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Articles;
