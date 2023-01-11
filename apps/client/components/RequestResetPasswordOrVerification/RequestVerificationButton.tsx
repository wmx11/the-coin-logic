import { UnstyledButton } from '@mantine/core';
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import useLoginFlowStore from 'store/useLoginFlowStore';

const RequestVerificationButton = () => {
  const state = useLoginFlowStore((state) => state);

  if (state.isRegister) {
    return null;
  }

  const text = state.isRequestVerification ? <IoArrowBackOutline size={20} /> : 'Request New Verification Code';

  return (
    <UnstyledButton
      className="text-slate-500"
      onClick={() => {
        state.setRequestVerification(!state.isRequestVerification);
      }}
    >
      {text}
    </UnstyledButton>
  );
};

export default RequestVerificationButton;
