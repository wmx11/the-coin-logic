import create from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

const useThemeStore = create(
  persist<ThemeStore>(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () =>
        set(() => {
          if (get().theme === 'light') {
            return { theme: 'dark' };
          }
          return { theme: 'light' };
        }),
      setDarkTheme: () => set(() => ({ theme: 'dark' })),
      setLightTheme: () => set(() => ({ theme: 'light' })),
    }),
    {
      name: 'theme-storage',
    },
  ),
);

export default useThemeStore;
