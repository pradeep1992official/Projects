import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (

    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center gap-4 '>
      <Link to="/" className="text-lg font-bold">Task Manager </Link>
      <div>
        {user ? (
          <button onClick={logout} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
            Log Out
          </button>) : (
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" >
            Login
          </Link>
        )
        }
      </div>
    </nav>

  )
}

export default Navbar