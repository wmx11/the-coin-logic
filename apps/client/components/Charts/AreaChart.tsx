import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import useThemeStore from 'store/useThemeStore';
import { TransformedChartsData } from 'types/Charts';
import { themeConfig } from 'utils/theme';

type ChartTypes = {
  data: TransformedChartsData;
  title: string;
};

const AreaChart = ({ data, title }: ChartTypes) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
  }

  const theme = useThemeStore((state) => state.theme);

  const options = {
    chart: {
      height: 400,
      backgroundColor: themeConfig[theme].backgroundColorLighter,
    },
    colors: ['#7950f2'],

    title: {
      text: `${title} Chart`,
    },
    rangeSelector: {
      selected: 1,
    },
    yAxis: [
      {
        height: '100%',
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: title,
        },
      },
    ],
    series: [
      {
        data: data.data,
        type: 'areaspline',
        name: title,
        threshold: null,
        tooltip: {
          valueDecimals: 9,
        },
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgba(121, 80, 242, 0.7)'],
            [1, 'rgba(170, 142, 253, 0.8)'],
          ],
        },
        id: title.replaceAll(' ', '-'),
      },
      {
        type: 'flags',
        name: 'Flags on series',
        data: data?.annotation,
        onSeries: title.replaceAll(' ', '-'),
        shape: 'squarepin',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 450,
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    </div>
  );
};

export default AreaChart;
