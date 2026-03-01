import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1 className='text-center mt-20 text-3xl'>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
