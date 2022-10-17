import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data, title, subtitle, yTitle, tooltip }) => {
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
    // dataLabels: {
    //   enabled: true,
    //   rotation: -90,
    //   color: '#FFFFFF',
    //   align: 'right',
    //   format: '{point.y:.1f}', // one decimal
    //   y: 10, // 10 pixels down from the top
    //   style: {
    //     fontSize: '13px',
    //     fontFamily: 'Verdana, sans-serif',
    //   },
    // },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={'chart'} options={options} />
    </div>
  );
};

export default BarChart;
