import { Content } from 'types';
import { DocumentRendererProps } from '@keystone-6/document-renderer';

export type ContentProps = {
  content?: Content & {
    content?: DocumentRendererProps;
  };
};
