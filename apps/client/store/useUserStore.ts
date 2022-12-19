import { User } from 'types';
import create from 'zustand';

export type UserWithOrdersCount = User & { ordersCount: number };

type UserState = {
  user: UserWithOrdersCount | null;
  setUser: (user: UserWithOrdersCount) => void;
  isProjectEditor: (user: UserWithOrdersCount, projectId: string) => boolean;
  isProjectOwner: (user: UserWithOrdersCount, projectId: string) => boolean;
  removeUser: () => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: null })),
  isProjectEditor: (user, projectId) => {
    if (!user) {
      return false;
    }

    if (user.isAdmin) {
      return true;
    }

    const isEditor = user.roles?.find(({ isEditor }) => isEditor);
    const canManageProject = user.managedProjects?.find(({ id }) => id === projectId);

    return isEditor !== undefined && canManageProject !== undefined;
  },
  isProjectOwner: (user, projectId) => {
    if (!user) {
      return false;
    }

    if (user.isAdmin) {
      return true;
    }

    const ownsProject = user.projects?.find(({ id }) => id === projectId);
    return ownsProject !== undefined;
  },
}));

export default useUserStore;
