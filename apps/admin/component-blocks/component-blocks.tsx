import React from 'react';
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks';
import { imageBlock } from './image';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  ...imageBlock,
};
