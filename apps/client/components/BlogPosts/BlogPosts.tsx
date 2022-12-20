import { FC } from 'react';
import { Content } from 'types';
import BlogPostCard from './BlogPostCard';

type BlogPostsType = {
  data: Content[];
};

const BlogPosts: FC<BlogPostsType> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data &&
          data.map((content, index) => {
            return <BlogPostCard data={content} key={`blog_post_${index}`} />;
          })}
      </div>
    </div>
  );
};

export default BlogPosts;
