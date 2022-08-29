import AddProject from 'components/pages/profile/AddProject';
import UserLayout from 'components/pages/profile/ProfileLayout';
import { TextContentProps } from 'components/TextContent/TextContent';
import { getContentByBlock } from 'data/getters';
import { ReactElement } from 'react';

function AddProjectPage({ content }: TextContentProps) {
  return <AddProject content={content} />;
}

export default AddProjectPage;

export const getServerSideProps = async () => {
  const content = await getContentByBlock('add-project-block');
  return {
    props: {
      content,
    },
  };
};

AddProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
