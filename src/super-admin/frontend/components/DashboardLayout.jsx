import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#0b1120] transition-colors duration-200 p-4 gap-4">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden gap-4">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto bg-white dark:bg-[#050914] rounded-3xl border border-gray-200 dark:border-[#131e3a] shadow-sm p-6 md:p-8 transition-colors duration-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
