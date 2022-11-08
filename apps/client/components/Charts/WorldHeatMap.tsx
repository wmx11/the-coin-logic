import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import HighchartsExporting from 'highcharts/modules/exporting';
import { useCallback, useEffect, useState } from 'react';

type WorldHeatMapProps<T> = {
  data: T[];
  title: string;
  subtitle?: string;
  tooltip?: string | Record<string, string>;
};

const WorldHeatMap = <T,>({ data, title, subtitle, tooltip }: WorldHeatMapProps<T>) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
  }

  if (!data) {
    return null;
  }

  const [topology, setTopology] = useState(null);

  const getTopology = useCallback(async () => {
    const topology = await fetch('https://code.highcharts.com/mapdata/custom/world.topo.json').then((response) =>
      response.json(),
    );

    setTopology(topology);
  }, []);

  useEffect(() => {
    getTopology();
  }, []);

  if (!topology) {
    return null;
  }

  const options = {
    chart: {
      map: topology,
      borderWidth: 0,
      height: 800,
    },
    colors: ['#7950f2'],
    title: {
      text: title,
    },

    subtitle: {
      text: subtitle,
    },

    legend: {
      enabled: true,
    },

    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
    },

    colorAxis: {
      min: 1,
      max: 10000,
      type: 'logarithmic',
    },

    series: [
      {
        name: 'Countries',
        color: '#7950f2',
      },
      {
        data,
        name: 'Clicks',
        joinBy: ['iso-a2', 'code'],
        states: {
          hover: {
            color: '#17153A',
          },
        },
        tooltip: {
          // pointFormat: '{point.country}: {point.z} Clicks',
          pointFormat: tooltip,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />
    </div>
  );
};

export default WorldHeatMap;
