import Modal from 'components/Modal/Modal';
import RecaptchaDisclaimer from 'components/RecaptchaDisclaimer';
import useLoginFlowStore from 'store/useLoginFlowStore';
import DeleteAccountContent from '../DeleteAccountContent/DeleteAccountContent';
import RequestPasswordResetContent from '../RequestPasswordResetContent/RequestPasswordResetContent';
import ResetPasswordContent from '../ResetPasswordContent/ResetPasswordContent';
import SignInContent from '../SignInContent/SignInContent';
import SignUpContent from '../SignUpContent/SignUpContent';
import RequestVerificationContent from '../RequestVerificationContent/RequestVerificationContent';

const LoginFlowModal = () => {
  const {
    isRequestResetPassword,
    isRegister,
    isLogin,
    setIsOpen,
    isOpen,
    isAccountDelete,
    isResetPassword,
    isRequestVerification,
  } = useLoginFlowStore((state) => state);

  const DyanmicContent = () => {
    if (isLogin) {
      return <SignInContent />;
    }

    if (isRegister) {
      return <SignUpContent />;
    }

    if (isResetPassword) {
      return <ResetPasswordContent />;
    }

    if (isRequestResetPassword) {
      return <RequestPasswordResetContent />;
    }

    if (isRequestVerification) {
      return <RequestVerificationContent />;
    }

    if (isAccountDelete) {
      return <DeleteAccountContent />;
    }

    return <SignInContent />;
  };

  return (
    <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
      <DyanmicContent />
      <RecaptchaDisclaimer />
    </Modal>
  );
};

export default LoginFlowModal;
