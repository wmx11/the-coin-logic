import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';
import { componentBlockRenderers, renderers } from 'components/ComponentBlocks';
import { FC } from 'react';
import { Content } from 'types';

export type TextContentProps = {
  content?: Content & {
    content?: DocumentRendererProps;
  };
  className?: string;
};

const TextContent: FC<TextContentProps> = ({ content, className }) => {
  if (!content) {
    return null;
  }

  return (
    <section className={`prose prose-md ${className}`}>
      <article className="m-auto">
        <DocumentRenderer
          document={content?.content?.document}
          renderers={renderers}
          componentBlocks={componentBlockRenderers}
        />
      </article>
    </section>
  );
};

export default TextContent;
