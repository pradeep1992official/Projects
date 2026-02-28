import React, { useState } from 'react'
import API from '../services/axios';

function AddTaskModal({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTask = async (onAddTask1) => {
    try {
      const res = await API.post("/tasks/createtask",
        onAddTask1,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      console.log("Task created:", res.data);
    }
    catch (err) {
      console.error("Error creating task:", err);
    }
  }

  const handleSubmit = (e) => {
    if (title.trim() && description.trim()) {
      e.preventDefault();
      onAddTask({ title, description, status: 'pending' });
      setTitle("");
      setDescription("");
      const newTask = createTask({ title, description, status: 'pending' });

    }
  }

  return (
    <div className='mb-4'>
      <input type="text" placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)} className='border p-2 w-full mb-2'></input>
      <textarea placeholder='Task Description' value={description} onChange={(e) => setDescription(e.target.value)} className='border p-2 w-full'></textarea>
      <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded'>Add Task</button>
    </div>
  )
}

export default AddTaskModal