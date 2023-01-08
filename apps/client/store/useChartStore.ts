import create from 'zustand';

export type ChartData = {
  date: string;
  value: string;
};

type ChartDataStore = {
  isInitial: boolean;
  loading: boolean;
  chartData: ChartData[];
  compareChartData: ChartData[];
  chartTitle: string;
  compareChartTitle: string;
  chartSection: string | 'marketData' | 'holdersData' | 'socialMediaData';
  network: string;
  pairAddress: string;
  setIsInitial: (isInitial: boolean) => void;
  setLoading: (loading: boolean) => void;
  setChartData: (chartData: ChartData[]) => void;
  setChartTitle: (chartTitle: string) => void;
  setChartSection: (chartSection: string) => void;
  setCompareChartData: (compareChartData: ChartData[]) => void;
  setCompareChartTitle: (compareChartTitle: string) => void;
  setNetwork: (network: string) => void;
  setPairAddress: (pairAddress: string) => void;
  clearChartData: () => void;
  clearCompareChartData: () => void;
  clearAll: () => void;
};

const initialSate = {
  isInitial: true,
  loading: false,
  chartData: [],
  compareChartData: [],
  chartTitle: '',
  compareChartTitle: '',
  chartSection: '',
  network: '',
  pairAddress: '',
};

const useChartStore = create<ChartDataStore>((set) => ({
  ...initialSate,
  setIsInitial: (isInitial: boolean) => set(() => ({ isInitial })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
  setChartData: (chartData: ChartData[]) => set(() => ({ chartData })),
  setChartTitle: (chartTitle: string) => set(() => ({ chartTitle })),
  setChartSection: (chartSection: string) => set(() => ({ chartSection })),
  setCompareChartData: (compareChartData: ChartData[]) => set(() => ({ compareChartData })),
  setCompareChartTitle: (compareChartTitle: string) => set(() => ({ compareChartTitle })),
  setNetwork: (network: string) => set(() => ({ network })),
  setPairAddress: (pairAddress: string) => set(() => ({ pairAddress })),
  clearChartData: () =>
    set((state) => {
      if (state.compareChartData.length) {
        return { chartData: [], chartTitle: '' };
      }
      return { chartData: [], chartTitle: '', chartSection: '' };
    }),
  clearCompareChartData: () =>
    set((state) => {
      if (state.chartData.length) {
        return { compareChartData: [], compareChartTitle: '' };
      }
      return { compareChartData: [], compareChartTitle: '', chartSection: '' };
    }),
  clearAll: () =>
    set(() => ({
      ...initialSate,
    })),
}));

export default useChartStore;
