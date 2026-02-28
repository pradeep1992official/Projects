import React, { useEffect } from 'react'
import API from '../services/axios'
import TaskCard from '../components/TaskCard'
import AddTaskModal from '../components/AddTaskModal'
import { useState } from 'react'

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks/getAllTasks");
      console.log("Fetched tasks:", response.data);
      setTasks(response.data);
    }
    catch (err) {
      console.error("Error fetching tasks:", err);
    };
  }

  const handleTask = (newTask) => {
    console.log("New task added:", newTask);
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <AddTaskModal onAddTask={handleTask} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard