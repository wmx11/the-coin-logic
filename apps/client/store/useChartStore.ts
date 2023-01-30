import axios from 'axios';
import routes from 'routes';
import { TransformedChartsData } from 'types/Charts';
import create from 'zustand';

export type ChartData = TransformedChartsData;
type ChartSection = string | 'marketData' | 'holdersData' | 'socialMediaData';

type ChartDataStore = {
  isInitial: boolean;
  loading: boolean;
  chartData: TransformedChartsData;
  compareChartData: TransformedChartsData;
  chartTitle: string;
  compareChartTitle: string;
  chartSection: ChartSection;
  network: string;
  pairAddress: string;
  setIsInitial: (isInitial: boolean) => void;
  setLoading: (loading: boolean) => void;
  setChartData: (chartData: TransformedChartsData) => void;
  setChartTitle: (chartTitle: string) => void;
  setChartSection: (chartSection: string) => void;
  setCompareChartData: (compareChartData: TransformedChartsData) => void;
  setCompareChartTitle: (compareChartTitle: string) => void;
  setNetwork: (network: string) => void;
  setPairAddress: (pairAddress: string) => void;
  clearChartData: () => void;
  clearCompareChartData: () => void;
  clearAll: () => void;
  fetchChartData: ({ entry, projectId, section }: { entry: string; projectId: string; section: ChartSection }) => void;
};

const initialSate = {
  isInitial: true,
  loading: false,
  chartData: {} as TransformedChartsData,
  compareChartData: {} as TransformedChartsData,
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
  setChartData: (chartData: TransformedChartsData) => set(() => ({ chartData })),
  setChartTitle: (chartTitle: string) => set(() => ({ chartTitle })),
  setChartSection: (chartSection: string) => set(() => ({ chartSection })),
  setCompareChartData: (compareChartData: TransformedChartsData) => set(() => ({ compareChartData })),
  setCompareChartTitle: (compareChartTitle: string) => set(() => ({ compareChartTitle })),
  setNetwork: (network: string) => set(() => ({ network })),
  setPairAddress: (pairAddress: string) => set(() => ({ pairAddress })),
  clearChartData: () =>
    set((state) => {
      if (state?.compareChartData?.data?.length) {
        return { chartData: {} as TransformedChartsData, chartTitle: '' };
      }
      return { chartData: {} as TransformedChartsData, chartTitle: '', chartSection: '' };
    }),
  clearCompareChartData: () =>
    set((state) => {
      if (state?.chartData?.data?.length) {
        return { compareChartData: {} as TransformedChartsData, compareChartTitle: '' };
      }
      return { compareChartData: {} as TransformedChartsData, compareChartTitle: '', chartSection: '' };
    }),
  clearAll: () =>
    set(() => ({
      ...initialSate,
    })),
  fetchChartData: async ({ entry, projectId, section }) => {
    const {
      data: { data },
    } = await axios.post(routes.api.data[section === 'socialMediaData' ? 'social' : 'market'], {
      projectId,
      selector: entry,
    });

    if (!data) {
      return null;
    }

    set({ chartData: data.data, chartSection: section });
  },
}));

export default useChartStore;
