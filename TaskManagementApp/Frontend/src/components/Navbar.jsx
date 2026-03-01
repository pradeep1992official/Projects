import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (

    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center gap-4 '>
      <Link to="/dashboard" className="text-lg font-bold">Task Manager </Link>
      <div>
        {user ? (
          <>
            <Link to="/notifications" className='text-white hover:text-gray-300'>Notifications</Link>
            <button onClick={() => {
              logout();
              navigate('/login');
            }} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
              Log Out
            </button>
          </>) : (
          <button onClick={() => navigate('/login')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>

        )
        }
      </div>
    </nav>

  )
}

export default Navbar