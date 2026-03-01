import "chart.js/auto";
import React from 'react'
import { Bar } from 'react-chartjs-2';

function ChartComponent({ taskStats }) {
  console.log('Received taskStats:', taskStats);
  const chartData = {
    labels: ['Pending', 'InProgress', 'Completed'],
    datasets: [
      {
        label: 'Tasks',
        data: [
          taskStats.pending || 0,
          taskStats.inProgress || 0,
          taskStats.completed || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Status'
      }
    }
  };

  return (
    <div className='w-full md:w-1/2 mx-auto'>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default ChartComponent