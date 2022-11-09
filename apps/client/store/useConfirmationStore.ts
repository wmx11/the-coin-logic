import create from 'zustand';

type UseConfirmationStoreTypes = {
  isConfirmationRequired: boolean;
  confirmationAction: () => void;
  setConfirmationAction: (action: () => void) => void;
  setIsConfirmationRequired: (isRequired: boolean) => void;
  resetConfirmationRequired: () => void;
};

const useConfirmationStore = create<UseConfirmationStoreTypes>((set) => ({
  isConfirmationRequired: false,
  confirmationAction: () => {},
  setConfirmationAction: (action: () => void) => set(() => ({ confirmationAction: action })),
  setIsConfirmationRequired: (isRequired: boolean) => set(() => ({ isConfirmationRequired: isRequired })),
  resetConfirmationRequired: () =>
    set(() => ({
      isConfirmationRequired: false,
      confirmationAction: () => {},
    })),
}));

export default useConfirmationStore;
