import Modal from 'components/Modal/Modal';
import RecaptchaDisclaimer from 'components/RecaptchaDisclaimer';
import useLoginFlowStore from 'store/useLoginFlowStore';
import DeleteAccountContent from '../DeleteAccountModal/DeleteAccountContent';
import RequestPasswordResetContent from '../RequestPasswordResetModal/RequestPasswordResetContent';
import ResetPasswordContent from '../ResetPasswordModal/ResetPasswordContent';
import SignInContent from '../SignInModal/SignInContent';
import SignUpContent from '../SignUpModal/SignUpContent';

const LoginFlowModal = () => {
  const { isRequestResetPassword, isRegister, isLogin, setIsOpen, isOpen, isAccountDelete, isResetPassword } =
    useLoginFlowStore((state) => state);

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
