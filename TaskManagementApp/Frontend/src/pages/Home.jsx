import React, { useEffect, useState } from 'react'
import API from '../services/axios'
import ChartComponent from '../components/ChartComponent'

function Home() {
  const [taskStats, setTaskStats] = useState([0, 0, 0]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await API.get('/tasks/gettaskstats');
        setTaskStats([
          response.data.pending || 0,
          response.data.inProgress || 0,
          response.data.completed || 0
        ]);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className='text-2xl font-bold text-center p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Welcome to Task Management App</h1>
      {taskStats ? <ChartComponent taskStats={{pending: taskStats[0], inProgress: taskStats[1], completed: taskStats[2]}} /> : 'Loading chart...'}
    </div>
  )
}

export default Home