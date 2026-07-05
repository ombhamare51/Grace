import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SuperAdminDashboard from './super-admin/frontend/Dashboard'
import SubAdminDashboard from './sub-admin/frontend/Dashboard'
import DoctorDashboard from './doctor/frontend/Dashboard'
import LabDashboard from './lab/frontend/Dashboard'
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
        
        {/* Portals */}
        <Route path="/super-admin/*" element={<SuperAdminDashboard />} />
        <Route path="/sub-admin/*" element={<SubAdminDashboard />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />
        <Route path="/lab/*" element={<LabDashboard />} />
      </Routes>
    </div>
  )
}

export default App
