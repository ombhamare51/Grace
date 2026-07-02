import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import './App.css'

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signin';

  return (
    <div className="min-h-screen bg-background font-sans">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
