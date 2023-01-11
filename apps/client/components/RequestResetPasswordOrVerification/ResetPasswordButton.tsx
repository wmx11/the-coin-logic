import { UnstyledButton } from '@mantine/core';
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import useLoginFlowStore from 'store/useLoginFlowStore';

const ResetPasswordButton = () => {
  const state = useLoginFlowStore((state) => state);

  if (state.isRegister) {
    return null;
  }

  const text = state.isRequestResetPassword ? <IoArrowBackOutline size={20} /> : 'Forgot Password?';

  return (
    <UnstyledButton
      className="text-slate-500"
      onClick={() => {
        state.setRequestResetPassword(!state.isRequestResetPassword);
      }}
    >
      {text}
    </UnstyledButton>
  );
};

export default ResetPasswordButton;
