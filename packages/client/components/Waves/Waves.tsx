import { Button, Paper, Text, Title } from '@mantine/core';
import React from 'react';

function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ objectFit: 'cover' }}
      id="my-svg"
      version="1"
      baseProfile="full"
      width="100%"
      height="100%"
      viewBox="0 0 1920 937"
    >
      <rect width="1920" height="937" fill="#0f172a" />
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="1" y1="1" y2="0">
          <stop offset="0%" stop-color="#ca126b90" />
          <stop offset="100%" stop-color="#7300a890" />
        </linearGradient>
      </defs>
      <path
        transform="scale(1, 1)"
        style={{ transformOrigin: 'center' }}
        d="M 0,937 V 0,562 C 118.75,600.1428571428571 237.5,638.2857142857143 408,635 C 578.5,631.7142857142857 800.75,587 969,531 C 1137.25,474.99999999999994 1251.5,407.71428571428567 1401,411 C 1550.5,414.28571428571433 1735.25,488.14285714285717 1920,562 C 1920,562 1920,937 1920,937 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#linear-gradient)"
        className="transition-all duration-300 ease-in-out delay-150"
      />
      <foreignObject x="885" y="227" width="510" height="225">

      </foreignObject>
      <foreignObject x="950" y="527" width="100" height="100">
        <div className="p-2 w-2 h-2 rounded-full bg-red-200"></div>
      </foreignObject>
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="1" y1="1" y2="0">
          <stop offset="0%" stop-color="#ca126bff" />
          <stop offset="100%" stop-color="#7300a8ff" />
        </linearGradient>
      </defs>
      <path
        transform="scale(1, 1)"
        d="M 0,937 V 0,843 C 121.03571428571428,921.6785714285714 242.07142857142856,1000.3571428571429 399,991 C 555.9285714285714,981.6428571428571 748.75,884.25 922,804 C 1095.25,723.75 1248.9285714285716,660.6428571428572 1412,670 C 1575.0714285714284,679.3571428571428 1747.5357142857142,761.1785714285713 1920,843 C 1920,843 1920,937 1920,937 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#linear-gradient)"
        className="transition-all duration-300 ease-in-out delay-150"
        style={{ transformOrigin: 'center center' }}
      />
    </svg>
  );
}

export default Waves;
