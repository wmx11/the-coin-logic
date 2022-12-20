import create from 'zustand';

type UseCommentsStoreTypes = {
  recentComment: string | undefined;
  setRecentComment: (id: string) => void;
  resetRecentComment: () => void;
};

const useCommentsStore = create<UseCommentsStoreTypes>((set) => ({
  recentComment: undefined,
  setRecentComment: (id: string) => set(() => ({ recentComment: id })),
  resetRecentComment: () => set(() => ({ recentComment: undefined })),
}));

export default useCommentsStore;
