import React from 'react';

function Chart({ chartUrl }) {
  return (
    <img
      src={chartUrl}
      alt="7-day chart"
      width="100"
      height="40"
      style={{ objectFit: 'contain' }}
    />
  );
}

export default Chart;
