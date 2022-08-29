import { useRouter } from 'next/router';
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

const GoBack = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.back()}>
      <IoArrowBackOutline size={20} />
      Go Back
    </div>
  );
};

export default GoBack;
