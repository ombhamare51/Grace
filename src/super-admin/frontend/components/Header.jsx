import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, Mail, Moon, Sun } from 'lucide-react';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const [isDark, setIsDark] = useState(false);

  // Apply dark class to html element when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="h-[72px] bg-white dark:bg-[#050914] border border-gray-200 dark:border-[#131e3a] rounded-3xl flex items-center justify-between px-6 z-10 transition-all duration-200 shadow-sm shrink-0">
      <div className="flex items-center gap-5">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>
        
        <div className="h-8 w-px bg-gray-200 dark:bg-[#131e3a] hidden sm:block"></div>
        
        <div className="hidden sm:flex flex-col justify-center">
          <h1 className="text-[17px] font-semibold text-gray-800 dark:text-white leading-tight">Dashboard</h1>
          <p className="text-[11px] text-gray-500 dark:text-slate-400 font-medium mt-0.5">Overview of Grace Dental Lab Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block w-72">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-[16px] w-[16px] text-gray-400 dark:text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-2 border border-gray-200 dark:border-[#131e3a] rounded-xl text-[13px] placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-[#0b1120] dark:text-white transition-colors h-[38px]"
            placeholder="Search anything..."
          />
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
            <kbd className="hidden sm:inline-block border border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#131e3a] rounded-[4px] px-1.5 py-0.5 text-[10px] font-medium text-gray-500 dark:text-slate-400 tracking-widest">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="relative text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors">
            <Bell className="w-[20px] h-[20px] stroke-[2]" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#60a5fa] text-[#050914] text-[9px] flex items-center justify-center rounded-full font-bold border-2 border-white dark:border-[#050914] box-content">8</span>
          </button>
          
          <button className="relative text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors">
            <Mail className="w-[20px] h-[20px] stroke-[2]" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#2dd4bf] text-[#050914] text-[9px] flex items-center justify-center rounded-full font-bold border-2 border-white dark:border-[#050914] box-content">3</span>
          </button>

          <div className="h-6 w-px bg-gray-200 dark:bg-[#131e3a]"></div>

          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-[#0b1120] border border-gray-200 dark:border-[#131e3a] rounded-full hover:bg-gray-100 dark:hover:bg-[#131e3a] transition-colors"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 stroke-[2]" /> : <Moon className="w-4 h-4 stroke-[2]" />}
          </button>
        </div>
      </div>
    </header>
  );
}
