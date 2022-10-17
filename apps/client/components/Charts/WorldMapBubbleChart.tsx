import React, { useCallback, useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

const WorldMapBubbleChart = (data) => {
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
      borderWidth: 1,
      map: topology,
    },

    title: {
      text: 'Traffic locations by number of clicks',
    },

    subtitle: {
      text: 'Explore the traffic locations with the most clicks.',
    },

    legend: {
      enabled: false,
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },

    series: [
      {
        name: 'Countries',
        color: '#E0E0E0',
        enableMouseTracking: false,
      },
      {
        type: 'mapbubble',
        name: 'Clicks',
        joinBy: ['iso-a2', 'code'],
        data: data.data,
        minSize: 4,
        maxSize: '10%',
        tooltip: {
          pointFormat: '{point.country}: {point.z} Clicks',
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

export default WorldMapBubbleChart;
