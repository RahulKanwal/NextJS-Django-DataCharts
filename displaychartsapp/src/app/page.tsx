"use client";

import { useState } from 'react';
import Head from 'next/head';
import BarChart from '../../components/barchart';
import Candlestick from '../../components/candlestick';
import LineChart from '../../components/linechart';
import PieChart from '../../components/piechart';

// Define the data type here as well for consistency
interface BarChartData {
  category: string;
  value: number;
}

interface CandlestickChartData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface LineChartData {
  date: Date;
  value: number;
}

export default function Home() {
  const [BarChartData, setBarChartData] = useState<BarChartData[]>([]);

  const handleBarChartDataFetched = (fetchedData: BarChartData[]) => {
    setBarChartData(fetchedData);
  };

  const [CandlestickChartData, setCandlestickData] = useState<CandlestickChartData[]>([]);

  const handleCandlestickDataFetched = (fetchedData: CandlestickChartData[]) => {
    setCandlestickData(fetchedData);
  };

  const [LineChartData, setLineChartData] = useState<LineChartData[]>([]);

  const handleLineChartDataFetched = (fetchedData: LineChartData[]) => {
    setLineChartData(fetchedData);
  };

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <div className='rows'>
          <div className='row'>
            <h1>My Bar Chart</h1>
            <BarChart onDataFetched={handleBarChartDataFetched} />
          </div>
          <div className='row'>
            <h1>My Candlestick Chart</h1>
            <Candlestick onDataFetched={handleCandlestickDataFetched} />
          </div>
        </div>
        <div className='rows'>
          <div className='row'>
            <h1>My Line Chart</h1>
            <LineChart onDataFetched={handleLineChartDataFetched} />
          </div>
          <div className='row'>
            <h1>My Pie Chart</h1>
            <PieChart />
          </div>
        </div>
      </main>
    </div>
  );
}

// pages/index.js