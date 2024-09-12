import React, { useEffect, useState, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import { title } from 'process';

// Define the data type directly in this file
interface LineChartData {
  date: Date;
  value: number;
}

interface LineChartProps {
  onDataFetched: (data: LineChartData[]) => void;
}

const LineChart: React.FC<LineChartProps> = ({ onDataFetched }) => {
  const [data, setData] = useState<LineChartData[]>([]);
  const plotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/line-chart-data/');
        const result: LineChartData[] = await response.json();
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
            marks: [
              Plot.lineY(data, {
                x: "date",
                y: "value",
                stroke: "steelblue",
                strokeWidth: 2,
                tip: true,
              })
            ],
            x: {
              type: "time",
              label: "Date",
              tickFormat: "%b %d",
              ticks: 5
            },
            y: { label: "Value" },
            width: 650,
            height: 300,
          });
        plotRef.current.appendChild(plot);

        return () => plot.remove();
    
    }
  }, [data]);

  return <div ref={plotRef}></div>;
};

export default LineChart;
