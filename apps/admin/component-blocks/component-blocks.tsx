import { imageBlock } from './image';
import { serviceCardBlock } from './serviceCard';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  ...imageBlock,
  ...serviceCardBlock,
};
