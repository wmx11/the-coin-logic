import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';
import { Text } from '@mantine/core';
import { componentBlockRenderers, renderers } from 'components/ComponentBlocks';
import { FC } from 'react';
import useThemeStore from 'store/useThemeStore';
import { Content } from 'types';

export type TextContentProps = {
  content?: Content & {
    content?: DocumentRendererProps;
  };
  className?: string;
  richContent?: string;
};

const TextContent: FC<TextContentProps> = ({ content, richContent, className }) => {
  const theme = useThemeStore((state) => state.theme);
  const parsedRichContent = () => {
    try {
      return JSON.parse(richContent as string);
    } catch (error) {
      return '';
    }
  };

  return (
    <section
      className={`prose prose-md ${
        theme === 'light'
          ? ''
          : 'prose-headings:text-white/80 prose-p:text-white/80 prose-ul:text-white/80 prose-li:text-white/80 prose-a:text-white prose-strong:text-white'
      }  ${className}`}
    >
      <article className="m-auto">
        {richContent ? (
          <Text color="">
            <div dangerouslySetInnerHTML={{ __html: parsedRichContent() }}></div>
          </Text>
        ) : (
          <Text color="">
            <DocumentRenderer
              document={content?.content?.document}
              renderers={renderers}
              componentBlocks={componentBlockRenderers}
            />
          </Text>
        )}
      </article>
    </section>
  );
};

export default TextContent;
