import React from 'react'

function TaskCard({ task }) {
  return (
    <div className='p-4 border rounded-lg shadow-md hover:shadow-lg'>
      <h3 className='font-bold text-lg'>{task.title}</h3>
      <p className='text-gray-600'>{task.description}</p>
      <span className={
        `${task.status === "Completed" ? 'bg-green-200 text-green-800'
          : task.status === "in-progress" ? 'bg-yellow-200 text-yellow-800'
            : 'bg-gray-200 text-gray-800'}`}>
        {task.status}
      </span>
    </div>
  )
}

export default TaskCard