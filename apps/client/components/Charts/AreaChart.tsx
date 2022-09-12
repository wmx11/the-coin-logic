import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

type ChartTypes = {
  data: {
    date: string;
    value: string | number;
  }[];
  title: string;
};

const AreaChart = ({ data, title }: ChartTypes) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
  }

  const options = {
    chart: {
      height: 400,
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
        type: 'spline',
        name: title,
        threshold: null,
        tooltip: {
          valueDecimals: 6,
        },
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#7950f2'],
            [1, '#aa8efd'],
          ],
        },
        id: title.replaceAll(' ', '-'),
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
              height: 300,
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
