import React, { useState } from 'react'
import API from '../services/axios';

function AddTaskModal({ task, onSubmit, onClose, editTask }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState(task ? task.status : 'pending');


  // const createTask = async (onAddTask1) => {
  //   try {
  //     const res = await API.post("/tasks/createtask",
  //       onAddTask1,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //     console.log("Task created:", res.data);
  //   }
  //   catch (err) {
  //     console.error("Error creating task:", err);
  //   }
  // }

  const handleSubmit = (e) => {
    onSubmit({ title, description, status });
    onClose();
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60'>
      <div className='bg-white p-4 rounded w-96 border border-gray-300 shadow-lg'>
        <h2 className='text-xl mb-4'>{task ? 'Edit Task' : 'Add Task'}</h2>
        <input type="text" placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)} className='border p-2 w-full mb-2'></input>
        <textarea placeholder='Task Description' value={description} onChange={(e) => setDescription(e.target.value)} className='border p-2 w-full'></textarea>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className='border p-2 w-full mb-2'>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded'>Submit</button>
        <button onClick={onClose} className='bg-gray-500 text-white p-2 rounded ml-2'>Cancel</button>
      </div>
    </div>
  )
}

export default AddTaskModal