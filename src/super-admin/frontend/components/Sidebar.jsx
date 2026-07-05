import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, Building2, Stethoscope, FileText, Package, Briefcase, 
  CreditCard, Landmark, ArrowLeftRight, BarChart, Calendar,
  Settings, ShieldAlert, Activity, MessageSquare, ChevronDown
} from 'lucide-react';

const menuGroups = [
  {
    title: 'MANAGEMENT',
    items: [
      { name: 'Users', icon: Users, path: '/super-admin/users' },
      { name: 'Laboratories', icon: Building2, path: '/super-admin/laboratories' },
      { name: 'Clinics / Dentists', icon: Stethoscope, path: '/super-admin/clinics' },
      { name: 'Orders', icon: FileText, path: '/super-admin/orders' },
      { name: 'Products & Services', icon: Package, path: '/super-admin/products' },
      { name: 'Cases', icon: Briefcase, path: '/super-admin/cases' },
      { name: 'Appointments', icon: Calendar, path: '/super-admin/appointments' },
    ]
  },
  {
    title: 'FINANCE',
    items: [
      { name: 'Payments', icon: CreditCard, path: '/super-admin/payments' },
      { name: 'Payouts', icon: Landmark, path: '/super-admin/payouts' },
      { name: 'Transactions', icon: ArrowLeftRight, path: '/super-admin/transactions' },
      { name: 'Invoices', icon: FileText, path: '/super-admin/invoices' },
      { name: 'Reports', icon: BarChart, path: '/super-admin/reports' },
    ]
  },
  {
    title: 'SYSTEM',
    items: [
      { name: 'Settings', icon: Settings, path: '/super-admin/settings' },
      { name: 'Roles & Permissions', icon: ShieldAlert, path: '/super-admin/roles' },
      { name: 'Activity Logs', icon: Activity, path: '/super-admin/activity-logs' },
      { name: 'Support Tickets', icon: MessageSquare, path: '/super-admin/support' },
    ]
  }
];

export default function Sidebar({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <aside className="w-[280px] bg-white dark:bg-[#050914] border border-gray-200 dark:border-[#131e3a] flex flex-col hidden md:flex h-full rounded-3xl shadow-lg dark:shadow-[0_0_30px_rgba(20,184,166,0.03)] transition-all duration-200 relative overflow-hidden shrink-0">
      {/* Super premium left edge glow effect */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-teal-500/40 to-transparent shadow-[0_0_10px_rgba(20,184,166,1)]"></div>
      
      <div className="pt-8 pb-6 px-7 flex items-center gap-3">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] shrink-0">
          <path d="M12 21c-1.5 0-3-1.5-3-3l-.5-3c-1.5-1-2.5-2.5-2-4 1-2 3.5-3 5.5-1l1 1 1-1c2-2 4.5-1 5.5 1 .5 1.5-.5 3-2 4l-.5 3c0 1.5-1.5 3-3 3-1 0-1.5-1-2-1.5-.5.5-1 1.5-2 1.5z" />
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold text-[28px] tracking-tight text-[#0f172a] dark:text-white leading-none">Grace</span>
          <span className="text-[10px] font-medium text-[#64748b] dark:text-slate-400 tracking-[0.2em] mt-1.5 uppercase leading-none">Dental Lab</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-2 space-y-6 scrollbar-hide">
        <NavLink to="/super-admin" end className={({isActive}) => `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] border border-teal-400/50' : 'text-gray-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/40'}`}>
          <div className="grid grid-cols-2 gap-[2px] w-5 h-5 shrink-0 items-center justify-center">
            <div className="bg-current rounded-[2px] w-[9px] h-[9px]"></div>
            <div className="bg-current rounded-[2px] w-[9px] h-[9px]"></div>
            <div className="bg-current rounded-[2px] w-[9px] h-[9px]"></div>
            <div className="bg-current rounded-[2px] w-[9px] h-[9px]"></div>
          </div>
          <span className="font-medium text-[15px]">Dashboard</span>
        </NavLink>

        {menuGroups.map((group, idx) => (
          <div key={idx} className="mt-6">
            <h3 className="text-[10.5px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-2">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <NavLink
                    to={item.path}
                    className={({isActive}) => `flex items-center gap-3.5 px-3 py-2.5 rounded-lg transition-colors text-[14px] ${isActive ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium' : 'text-gray-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/40'}`}
                  >
                    <item.icon className="w-5 h-5 shrink-0 stroke-[1.5]" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto px-4 pb-6 pt-4">
        <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 dark:border-slate-700/50 bg-white dark:bg-[#0f1629] shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <img src="https://i.pravatar.cc/150?u=superadmin" alt="Super Admin" className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-slate-700" />
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-white truncate leading-tight">Super Admin</p>
            <div className="inline-block px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-500/20 border border-teal-100 dark:border-teal-500/30 mt-1">
              <p className="text-[10px] text-teal-700 dark:text-teal-400 font-medium leading-tight">Super Admin</p>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-gray-50 dark:bg-[#1a233a] border border-gray-200 dark:border-slate-700/50 flex items-center justify-center cursor-pointer shrink-0 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700">
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 dark:text-slate-400" />
          </div>
        </div>
      </div>
    </aside>
  );
}
