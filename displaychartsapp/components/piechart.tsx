// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart, ArcElement } from 'chart.js';

// // Register the necessary components and plugins
// Chart.register(ArcElement);

// // Define a type for the chart data
// type ChartData = {
//     labels: string[];
//     datasets: {
//       data: number[];
//       backgroundColor: string[];
//     }[];
// };

// const PieChart = () => {
//   // Initialize the state with the correct type
//   const [chartData, setChartData] = useState<ChartData | null>(null);

//   useEffect(() => {
//     const apiUrl = 'http://localhost:8000/api/pie-chart-data/'; // Replace with your actual API endpoint

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Transform the data into the format needed for the pie chart
//         const transformedData: ChartData = {
//           labels: data.map((item: any) => item.segment), // Adjust according to your data structure
//           datasets: [
//             {
//               data: data.map((item: any) => item.value), // Adjust according to your data structure 
//               backgroundColor: [
//                 '#FF6384',
//                 '#36A2EB',
//                 '#FFCE56',
//                 '#4BC0C0',
//                 '#9966FF',
//                 '#FF9F40',
//               ],              
//             },
//           ]
//         };

//         setChartData(transformedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {chartData ? (
//         <Pie
//           data={chartData}
//         />
//       ) : (
//         <p>Loading chart data...</p>
//       )}
//     </div>
//   );
// };

// export default PieChart;

// components/PieChart.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

type DataItem = {
  segment: string;
  value: number;
};

const PieChart: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/pie-chart-data/'); // Replace with your API endpoint
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<DataItem>().value(d => d.value);
    const arc = d3.arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

      arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.segment))
      .on('mouseover', (event, d) => {
        const tooltip = d3.select(tooltipRef.current);
        tooltip.style('visibility', 'visible')
          .text(`${d.data.segment}: ${d.data.value}`);
      })
      .on('mousemove', (event) => {
        const tooltip = d3.select(tooltipRef.current);
        tooltip.style('top', `${event.pageY - 10}px`)
          .style('left', `${event.pageX + 10}px`);
      })
      .on('mouseout', () => {
        const tooltip = d3.select(tooltipRef.current);
        tooltip.style('visibility', 'hidden');
      });
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}>
        <g></g>
      </svg>
      <div ref={tooltipRef} style={{
        position: 'absolute',
        visibility: 'hidden',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '5px',
        borderRadius: '5px',
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default PieChart;

