import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks';
import { Paper, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { componentBlocks } from '../../../admin/component-blocks/component-blocks';

const componentBlockRenderers: InferRenderersForComponentBlocks<typeof componentBlocks> = {
  image: (props) => {
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
  serviceCard: (props) => {
    return (
      <Paper p="lg" shadow="md" withBorder className="flex justify-between items-center">
        <div className="flex-1 md:max-w-[80%]">
          <Title order={2} className="text-violet">
            {props.title}
          </Title>
          <Text size="sm">{props.description}</Text>
        </div>
        <div className="flex-0 flex justify-end">
          <Image src={props.image as string} alt={props.alt as string} width="50px" height="50px" layout="intrinsic" />
        </div>
      </Paper>
    );
  },
};

export default componentBlockRenderers;
