import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

type BarChartProps<T> = {
  data: T[];
  title: string;
  subtitle?: string;
  yTitle?: string;
  tooltip?: string | Record<string, string>;
};

const BarChart = <T,>({ data, title, subtitle, yTitle, tooltip }: BarChartProps<T>) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
  }

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle,
    },
    colors: ['#7950f2'],
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '9px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: yTitle,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: tooltip,
    },
    series: data,
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={'chart'} options={options} />
    </div>
  );
};

export default BarChart;
