import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';
import { componentBlockRenderers, renderers } from 'components/ComponentBlocks';
import { FC } from 'react';
import { Content } from 'types';

export type TextContentProps = {
  content?: Content & {
    content?: DocumentRendererProps;
  };
  className?: string;
  richContent?: string;
};

const TextContent: FC<TextContentProps> = ({ content, richContent, className }) => {
  const parsedRichContent = () => {
    try {
      return JSON.parse(richContent as string);
    } catch (error) {
      return '';
    }
  };

  return (
    <section className={`prose prose-md ${className}`}>
      <article className="m-auto">
        {richContent ? (
          <div dangerouslySetInnerHTML={{ __html: parsedRichContent() }}></div>
        ) : (
          <DocumentRenderer
            document={content?.content?.document}
            renderers={renderers}
            componentBlocks={componentBlockRenderers}
          />
        )}
      </article>
    </section>
  );
};

export default TextContent;
