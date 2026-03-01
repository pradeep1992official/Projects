import React from 'react'

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className='p-4 border rounded-lg shadow-md hover:shadow-lg'>
      <h3 className='font-bold text-lg'>{task.title}</h3>
      <p className='text-gray-600'>{task.description}</p>
      <span className={
        `${task.status === "Completed" ? 'bg-green-200 text-green-800 px-1 py-1 rounded-lg'
          : task.status === "pending" ? 'bg-yellow-200 text-yellow-800 px-1 py-1 rounded-lg'
            : 'bg-gray-200 text-gray-800'}`}>
        {task.status}
      </span>
      <div>
        <button onClick={() => onEdit(task)} className='bg-blue-500 text-white px-2 py-1 rounded-lg mt-2'>Edit</button>
        <button onClick={() => onDelete(task)} className='bg-red-500 text-white px-2 py-1 rounded-lg mt-2 ml-2'>Delete</button>
      </div>
    </div>
  )
}

export default TaskCard