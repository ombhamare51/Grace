import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';

export default function SuperAdminDashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        {/* other routes will go here */}
      </Route>
    </Routes>
  );
}
