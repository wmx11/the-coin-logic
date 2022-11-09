import create from 'zustand';

type LoginFlowState = {
  isLogin: boolean;
  isRegister: boolean;
  isRequestResetPassword: boolean;
  isResetPassword: boolean;
  isAccountDelete: boolean;
  isSuccess: boolean;
  isLoginSuccess: boolean;
  isInitial: boolean;
  isOpen: boolean;
  isReadOnly: boolean;
  setLogin: (type: boolean) => void;
  loginCallback: (cb: () => void) => void;
  registerCallback: (cb: () => void) => void;
  setRegister: (type: boolean) => void;
  setRequestResetPassword: (type: boolean) => void;
  setResetPassword: (type: boolean) => void;
  setAccountDelete: (type: boolean) => void;
  setSuccess: (type: boolean) => void;
  setLoginSuccess: (type: boolean) => void;
  setIsOpen: (type: boolean) => void;
  setIsInitial: (type: boolean) => void;
  resetAll: () => void;
};

const initialState = {
  isLogin: false,
  isRegister: false,
  isRequestResetPassword: false,
  isResetPassword: false,
  isAccountDelete: false,
  isSuccess: false,
  isLoginSuccess: false,
  isOpen: false,
  isInitial: true,
};

const commons = {
  ...initialState,
  isInitial: false,
  isOpen: true,
};

const useLoginFlowStore = create<LoginFlowState>((set) => ({
  ...initialState,
  isReadOnly: false,
  setLogin: (type: boolean) =>
    set(() => ({
      ...commons,
      isLogin: type,
    })),
  setRegister: (type: boolean) =>
    set(() => ({
      ...commons,
      isRegister: type,
    })),
  setRequestResetPassword: (type: boolean) =>
    set(() => ({
      ...commons,
      isRequestResetPassword: type,
    })),
  setResetPassword: (type: boolean) =>
    set(() => ({
      ...commons,
      isResetPassword: type,
    })),
  setAccountDelete: (type: boolean) =>
    set(() => ({
      ...commons,
      isAccountDelete: type,
    })),
  setSuccess: (type: boolean) =>
    set(() => ({
      isInitial: false,
      isSuccess: type,
    })),
  setLoginSuccess: (type: boolean) =>
    set(() => ({
      isInitial: false,
      isLoginSuccess: type,
    })),
  setIsOpen: (type: boolean) =>
    set(() => ({
      isOpen: type,
    })),
  setIsInitial: (type: boolean) =>
    set(() => ({
      isInitial: type,
    })),
  setIsReadonly: (type: boolean) =>
    set(() => ({
      isReadOnly: type,
    })),
  resetAll: () => set(() => ({ ...initialState, isReadOnly: false })),
  loginCallback: (cb: () => void) => cb && cb(),
  registerCallback: (cb: () => void) => cb && cb(),
}));

export default useLoginFlowStore;
