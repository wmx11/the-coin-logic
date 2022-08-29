/** @jsx */
import { jsx } from '@keystone-ui/core';
import React from 'react';
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const imageBlock = {
  image: component({
    preview: (props) => {
      return (
        <span style={{ display: 'flex', margin: '5px' }}>
          <img
            src={props.fields.src.value}
            alt={props.fields.alt.value}
            style={{
              width: props.fields.width.value,
              minWidth: props.fields.minWidth.value,
              height: props.fields.height.value,
            }}
          />
        </span>
      );
    },
    label: 'Add Image',
    schema: {
      alt: fields.text({ label: 'Image Alt', defaultValue: '' }),
      minWidth: fields.text({ label: 'Min width', defaultValue: '100%' }),
      width: fields.text({ label: 'Width', defaultValue: '100%' }),
      height: fields.text({ label: 'Height', defaultValue: '100%' }),
      layout: fields.select({
        label: 'Layout',
        options: [
          { label: 'Intrinsic', value: 'intrinsic' },
          { label: 'Fill', value: 'fill' },
          { label: 'Fixed', value: 'fixed' },
          { label: 'Responsive', value: 'responsive' },
        ],
        defaultValue: 'intrinsic',
      }),
      src: fields.text({
        label: 'Image Url',
        defaultValue: '',
      }),
    },
  }),
};
