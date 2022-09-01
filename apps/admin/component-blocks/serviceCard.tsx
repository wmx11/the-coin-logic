/** @jsx */
import { component, fields } from '@keystone-6/fields-document/component-blocks';
import React from 'react';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const serviceCardBlock = {
  serviceCard: component({
    preview: (props) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid gray',
            gap: '8',
          }}
        >
          <div style={{ flex: '1 1 50%' }}>
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>{props.fields.title.element}</p>
            <p>{props.fields.description.element}</p>
          </div>
          <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'end' }}>
            <img src={props.fields.image.value} alt={props.fields.alt.value} width="50px" height="50px" />
          </div>
        </div>
      );
    },

    label: 'Add service card',
    schema: {
      title: fields.child({
        kind: 'inline',
        placeholder: 'Title',
        formatting: 'inherit',
        links: 'inherit',
        relationships: 'inherit',
      }),
      description: fields.child({
        kind: 'block',
        placeholder: 'Description',
        formatting: 'inherit',
        links: 'inherit',
        relationships: 'inherit',
      }),
      alt: fields.text({ label: 'Image alt' }),
      image: fields.text({ label: 'Image url' }),
    },
  }),
};
