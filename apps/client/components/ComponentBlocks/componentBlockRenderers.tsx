import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks';
import Image from 'next/image';
import { componentBlocks } from '../../../admin/component-blocks/component-blocks';

const componentBlockRenderers: InferRenderersForComponentBlocks<typeof componentBlocks> = {
  image: (props) => {
    console.log(props);

    return (
      <a href={props.src} target="_blank" className="max-w-full">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          layout={(props.layout as 'fixed' | 'fill' | 'intrinsic' | 'responsive') || 'intrinsic'}
          loading="lazy"
          height={props.height || '100%'}
        />
      </a>
    );
  },
};

export default componentBlockRenderers;
