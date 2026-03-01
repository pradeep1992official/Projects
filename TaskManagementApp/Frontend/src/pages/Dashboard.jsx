import React, { useEffect } from 'react'
import API from '../services/axios'
import TaskCard from '../components/TaskCard'
import AddTaskModal from '../components/AddTaskModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const navigate = useNavigate();
  const [toast, setToast] = useState({ open: false, severity: 'success', message: '' });


  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks/getAllTasks");
      setToast({ open: true, severity: 'success', message: 'Tasks added successfully!' });
      setTasks(response.data);
    }
    catch (err) {
      console.error("Error fetching tasks:", err);
    };
  }

  const handleAddEditTask = async (taskData) => {
    try {
      if (editTask) {
        await API.put(`/tasks/updateTask/${editTask._id}`, taskData);
        setToast({ open: true, severity: 'success', message: 'Task updated successfully!' });
        setEditTask(null);
      } else {
        await API.post("/tasks/createTask", taskData);
        setToast({ open: true, severity: 'success', message: 'Task added successfully!' });
      }
      setShowModal(false);
      setEditTask(null);
      fetchTasks();
    } catch (err) {
      console.error("Error handling task:", err);
      setToast({ open: true, severity: 'error', message: 'Failed to add/update task!' });
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await API.delete(`/tasks/deleteTask/${taskId}`);
      setToast({ open: true, severity: 'success', message: 'Task deleted successfully!' });
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
      setToast({ open: true, severity: 'error', message: 'Failed to delete task!' });
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowModal(true)}>Add Task</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} onEdit={(task) => {
            setEditTask(task);
            setShowModal(true);
          }}
            onDelete={() => handleDeleteTask(task._id)} />
        ))}
      </div>
      <button onClick={()=>navigate('/home')} className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>OverView</button>
      {showModal && <AddTaskModal
      onClose={() => {
        setShowModal(false);
        setEditTask(null);
      }}
      onSubmit={handleAddEditTask} 
      task={editTask} />}
    </div>
  )
}

export default Dashboard