import React, { useEffect, useState, useRef } from 'react';
import * as Plot from '@observablehq/plot';

interface CandlestickChartData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  onDataFetched: (data: CandlestickChartData[]) => void;
}

const Candlestick: React.FC<CandlestickChartProps> = ({ onDataFetched }) => {
  const [data, setData] = useState<CandlestickChartData[]>([]);
  const plotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/candlestick-data/');
        const result: CandlestickChartData[] = await response.json();
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
        y: {
          grid: true
        },
        color: {
          domain: [-1, 0, 1],
          range: ["#4daf4a", "#999999", "#e41a1c"]
        },
        marks: [
          Plot.ruleX(data, {
            x: "date",
            y1: "low",
            y2: "high",
          }),
          Plot.ruleX(data, {
            x: "date",
            y1: "open",
            y2: "close",
            stroke: d => Math.sign(d.close - d.open),
            strokeWidth: 4,
            strokeLinecap: "round",
            title: d => `Date: ${d.date}\nOpen: ${d.open}\nHigh: ${d.high}\nLow: ${d.low}\nClose: ${d.close}`,
            tip: true,
          }),
        ],
        x: {
          type: "time",
          label: "Date",
          tickFormat: "%b %d", // Format the date as "Month Day"
          ticks: 5, // Number of ticks to display
        },
        width: 650,
        height: 300,
      })
      plotRef.current.appendChild(plot);
      return () => plot.remove();
    }
  }, [data]);

  return <div ref={plotRef}></div>;
};



export default Candlestick;