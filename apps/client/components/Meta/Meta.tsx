import Head from 'next/head';
import React, { FC } from 'react';

type MetaProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
};

const Meta: FC<MetaProps> = ({ title, description, url, image, type }) => {
  return (
    <Head>
      {title && (
        <>
          <title key="title">{title}</title>
          <meta key="og:title" property="og:title" content={title} />
        </>
      )}

      {description && (
        <>
          <meta key="description" name="description" content={description} />
          <meta key="og:description" property="og:description" content={description} />
        </>
      )}

      {url && (
        <>
          <meta key="og:url" property="og:url" content={url} />
          <link key="canonical" rel="canonical" href={url} />
        </>
      )}

      {image && (
        <>
          <meta key="og:image" property="og:image" content={image} />
        </>
      )}

      {type && (
        <>
          <meta key="og:type" property="og:type" content={type} />
        </>
      )}
    </Head>
  );
};

export default Meta;
