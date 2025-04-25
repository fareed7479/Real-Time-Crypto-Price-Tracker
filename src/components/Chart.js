import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function Chart({ data }) {
  // data is expected to be an array of numbers representing prices over 7 days
  // convert to array of objects with day label for recharts
  const chartData = data.map((price, index) => ({
    day: `Day ${index + 1}`,
    price,
  }));

  return (
    <div style={{ width: 100, height: 40 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="day" hide />
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4bc0c0"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
