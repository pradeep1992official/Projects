import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import API from '../services/axios'
import { useNavigate  } from 'react-router-dom'
// const navigate = useNavigate();


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { email, password });
      localStorage.setItem("token", response.data.token);
      login(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=' mb-4 p-2 border border-gray-300 rounded-lg w-full'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=' mb-4 p-2 border border-gray-300 rounded-lg w-full'
      />
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  )
}

export default Login