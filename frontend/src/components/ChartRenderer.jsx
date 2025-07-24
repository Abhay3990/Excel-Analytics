import React, { useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';


import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function ChartRenderer({ headers, rows }) {
  const [type, setType] = useState('bar');
  const [xAxis, setXAxis] = useState(headers[0]);
  const [yAxis, setYAxis] = useState(headers[1]);
  const [title, setTitle] = useState('My Chart');
  const [bgColor, setBgColor] = useState('#4FD1C5');
  const [borderColor, setBorderColor] = useState('#2C7A7B');

  const xIndex = headers.indexOf(xAxis);
  const yIndex = headers.indexOf(yAxis);

  const labels = rows.map(row => row[xIndex]);
  const values = rows.map(row => row[yIndex]);

  const chartData = {
    labels,
    datasets: [{
      label: yAxis,
      data: values,
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  };

  const renderChart = {
    bar: <Bar data={chartData} options={{ plugins: { title: { display: true, text: title } } }} />,
    line: <Line data={chartData} options={{ plugins: { title: { display: true, text: title } } }} />,
    pie: <Pie data={chartData} options={{ plugins: { title: { display: true, text: title } } }} />,
    scatter: (
      <Scatter
        data={{
          datasets: [{
            label: yAxis,
            data: rows.map(row => ({ x: row[xIndex], y: row[yIndex] })),
            backgroundColor: bgColor,
            borderColor: borderColor
          }]
        }}
        options={{ plugins: { title: { display: true, text: title } } }}
      />
    )
  }[type];



return (
  <div>
    {/* Controls Section */}
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end">
      <div>
        <label className="block text-sm font-medium">X-Axis</label>
        <select
          value={xAxis}
          onChange={e => setXAxis(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {headers.map(h => <option key={h}>{h}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Y-Axis</label>
        <select
          value={yAxis}
          onChange={e => setYAxis(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {headers.map(h => <option key={h}>{h}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Background Color</label>
        <input
          type="color"
          value={bgColor}
          onChange={e => setBgColor(e.target.value)}
          className="w-16 h-10 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Border Color</label>
        <input
          type="color"
          value={borderColor}
          onChange={e => setBorderColor(e.target.value)}
          className="w-16 h-10 border rounded"
        />
      </div>
    </div>

    {/* Chart Buttons */}
    <div className="mb-4 flex gap-2 flex-wrap">
      {['bar', 'line', 'pie', 'scatter'].map(chart => (
        <button
          key={chart}
          onClick={() => setType(chart)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          {chart.toUpperCase()}
        </button>
      ))}
    </div>

    {/* Render Chart */}
    <div className="bg-white p-4 rounded shadow overflow-auto">
      {renderChart}
    </div>
  </div>
);
}
