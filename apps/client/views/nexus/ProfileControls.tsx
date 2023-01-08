import { Button } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { Provider } from 'types';

type ProfileControlsProps = {
  provider: Provider;
};

const ProfileControls: FC<ProfileControlsProps> = ({ provider }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Modal = dynamic(() => import('components/Modal'));
  const CreateOrUpdateNexusProfile = dynamic(() => import('views/profile/Nexus/CreateOrUpdateNexusProfile'));

  const handleClick = async () => {
    setIsOpen((o) => !o);
  };

  return (
    <>
      <Button variant="outline" color="violet" size="sm" onClick={handleClick}>
        Edit Profile
      </Button>
      <Modal opened={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <CreateOrUpdateNexusProfile provider={provider} isUpdate={true} />
      </Modal>
    </>
  );
};

export default ProfileControls;
