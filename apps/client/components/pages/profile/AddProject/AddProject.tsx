import GoBack from 'components/GoBack';
import TextContent from 'components/TextContent';
import { TextContentProps } from 'components/TextContent/TextContent';

const AddProject = ({ content }: TextContentProps) => {
  return (
    <div>
      <GoBack />
      <TextContent content={content} className="max-w-none" />
    </div>
  );
};

export default AddProject;
