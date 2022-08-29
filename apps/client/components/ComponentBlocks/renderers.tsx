import { DocumentRendererProps } from '@keystone-6/document-renderer';

const renderers: DocumentRendererProps['renderers'] = {
  inline: {
    link: (props) => {
      return (
        <a href={props.href} target="_blank">
          {props.children}
        </a>
      );
    },
  },
  block: {
    layout: (props) => {
      return (
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          {props.layout.map((layout, index) => {
            return (
              <div className="flex-1 break-words" key={`document_layout_${index}`}>
                {props.children[index]}
              </div>
            );
          })}
        </div>
      );
    },
  },
};

export default renderers;