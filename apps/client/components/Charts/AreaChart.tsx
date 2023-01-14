import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { Annotation } from 'types/Charts';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

type ChartTypes = {
  data: {
    date: string;
    value: string | number;
    annotation: Annotation;
  }[];
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
        data: data.map(({ date, value }) => [new Date(date).getTime(), value]),
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
        data: data.reduce((arr, curr) => {
          if (curr?.annotation?.title === null) {
            return arr;
          }

          const data = {
            x: new Date(curr?.date).getTime(),
            title: curr?.annotation?.title,
            text: curr?.annotation?.description,
            events: {
              click: () => {
                if (curr?.annotation?.href) {
                  window.open(curr?.annotation?.href, '__blank');
                }
              },
            },
          };

          arr.push(data);

          return arr;
        }, [] as any),
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
