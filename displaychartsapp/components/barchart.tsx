// components/BarChart.tsx
import React, { useEffect, useState, useRef } from 'react';
import * as Plot from '@observablehq/plot';

// Define the data type directly in this file
interface BarChartData {
  category: string;
  value: number;
}

interface BarChartProps {
  onDataFetched: (data: BarChartData[]) => void;
}

const BarChart: React.FC<BarChartProps> = ({ onDataFetched }) => {
  const [data, setData] = useState<BarChartData[]>([]);
  const plotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/bar-chart-data/');
        const result: BarChartData[] = await response.json();
        setData(result);
        onDataFetched(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (plotRef.current && data.length > 0) {
      const plot = Plot.plot({
        marks: [Plot.barY(data, { x: 'category', y: 'value' }), Plot.text(data, { x: 'category', y: 'value', text: d => d.value.toString(), dy: -10 })],
        width: 650,
        height: 300,
      });

      plotRef.current.appendChild(plot);

      return () => plot.remove();
    }
  }, [data]);

  return <div ref={plotRef}></div>;
};

export default BarChart;
