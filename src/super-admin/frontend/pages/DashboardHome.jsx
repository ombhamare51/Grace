import React from 'react';
import { 
  Users, Building2, Stethoscope, ArrowUpRight, ArrowDownRight, 
  Calendar, CheckCircle2, Clock, XCircle, Download, FileText,
  Package, ChevronDown, BarChart
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Area, AreaChart,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const miniChartData1 = [{ v: 20 }, { v: 40 }, { v: 30 }, { v: 70 }, { v: 50 }, { v: 90 }, { v: 100 }];
const miniChartData2 = [{ v: 30 }, { v: 20 }, { v: 50 }, { v: 40 }, { v: 60 }, { v: 55 }, { v: 80 }];
const miniChartData3 = [{ v: 40 }, { v: 60 }, { v: 45 }, { v: 80 }, { v: 70 }, { v: 95 }, { v: 110 }];
const miniChartData4 = [{ v: 100 }, { v: 120 }, { v: 90 }, { v: 150 }, { v: 140 }, { v: 180 }, { v: 200 }];

const statCards = [
  { title: 'Total Users', value: '1,248', change: '12.5%', isPositive: true, icon: Users, color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-[#1e293b]', chartData: miniChartData1, chartColor: '#2dd4bf' },
  { title: 'Laboratories', value: '86', change: '8.3%', isPositive: true, icon: Building2, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-[#1e293b]', chartData: miniChartData2, chartColor: '#a855f7' },
  { title: 'Clinics / Dentists', value: '532', change: '15.7%', isPositive: true, icon: Stethoscope, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-[#1e293b]', chartData: miniChartData3, chartColor: '#3b82f6' },
  { title: 'Total Revenue', value: '₹24,68,450', change: '20.4%', isPositive: true, icon: () => <span className="font-bold text-lg">₹</span>, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-[#1e293b]', chartData: miniChartData4, chartColor: '#22c55e' },
];

const revenueData = [
  { name: 'Jan', value: 1000000 },
  { name: 'Feb', value: 1500000 },
  { name: 'Mar', value: 1200000 },
  { name: 'Apr', value: 1800000 },
  { name: 'May', value: 2468450 },
  { name: 'Jun', value: 2200000 },
];

const orderStatusData = [
  { name: 'Pending', value: 621, color: '#FBBF24' },
  { name: 'In Progress', value: 842, color: '#3B82F6' },
  { name: 'Completed', value: 756, color: '#10B981' },
  { name: 'Cancelled', value: 131, color: '#EF4444' },
];

const recentActivities = [
  { id: 1, title: 'New laboratory "Bright Smile Lab" registered', time: '10:30 AM', icon: Building2, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-[#1e293b]' },
  { id: 2, title: 'Order #ORD-1250 has been completed', time: '09:45 AM', icon: CheckCircle2, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-[#1e293b]' },
  { id: 3, title: 'Payment of ₹45,000 received from Dental Care Clinic', time: '09:20 AM', icon: () => <span className="font-bold text-sm">₹</span>, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-[#1e293b]' },
  { id: 4, title: 'New user "Dr. Ananya Sharma" registered', time: '08:15 AM', icon: Users, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-[#1e293b]' },
  { id: 5, title: 'Payout of ₹78,500 processed to Perfect Dental Lab', time: 'Yesterday', icon: Download, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-[#1e293b]' },
];

const topLaboratories = [
  { id: 1, name: 'Perfect Dental Lab', orders: 245, revenue: '₹4,85,200', icon: Building2 },
  { id: 2, name: 'Bright Smile Lab', orders: 198, revenue: '₹3,92,450', icon: Building2 },
  { id: 3, name: 'Digital Dental Studio', orders: 176, revenue: '₹3,21,000', icon: Building2 },
  { id: 4, name: 'Care Dental Lab', orders: 154, revenue: '₹2,98,750', icon: Building2 },
  { id: 5, name: 'Elite Dental Lab', orders: 132, revenue: '₹2,45,600', icon: Building2 },
];

const topServices = [
  { id: 1, name: 'Crown & Bridge', orders: 842, revenue: '₹8,45,600', icon: () => <span className="text-teal-600 dark:text-teal-400 text-xs">🦷</span> },
  { id: 2, name: 'Zirconia Restorations', orders: 621, revenue: '₹6,21,450', icon: () => <span className="text-red-500 dark:text-red-400 text-xs">🦷</span> },
  { id: 3, name: 'Implant Solutions', orders: 412, revenue: '₹4,18,300', icon: () => <span className="text-purple-500 dark:text-purple-400 text-xs">🦷</span> },
  { id: 4, name: 'Dentures', orders: 298, revenue: '₹2,85,600', icon: () => <span className="text-blue-500 dark:text-blue-400 text-xs">🦷</span> },
  { id: 5, name: 'Teeth Whitening', orders: 177, revenue: '₹1,75,500', icon: () => <span className="text-blue-500 dark:text-blue-400 text-xs">🦷</span> },
];

const quickActions = [
  { name: 'Add User', icon: Users, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'Add Laboratory', icon: Building2, color: 'text-purple-600 dark:text-purple-400' },
  { name: 'Add Clinic', icon: Stethoscope, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Create Order', icon: FileText, color: 'text-yellow-600 dark:text-yellow-400' },
  { name: 'Manage Services', icon: Package, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'View Reports', icon: BarChart, color: 'text-red-500 dark:text-red-400' },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 transition-colors">
            Welcome back, Super Admin! <span className="text-2xl">👋</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Here's what's happening with your platform today.</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-[#131b2f] border border-gray-200 dark:border-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm cursor-pointer transition-colors">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span>01 May 2025 - 31 May 2025</span>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-2" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md transition-all flex justify-between h-[140px] overflow-hidden">
            <div className="flex flex-col justify-between z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.bg} ${card.color} transition-colors`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">{card.title}</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">{card.value}</h3>
                <div className="flex flex-col mt-1">
                  <div className={`flex items-center gap-1 text-xs font-medium ${card.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {card.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {card.change}
                  </div>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 transition-colors">vs last month</span>
                </div>
              </div>
            </div>
            
            {/* Mini Chart */}
            <div className="w-[100px] h-[70px] self-end -mr-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={card.chartData}>
                  <defs>
                    <linearGradient id={`color-${idx}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={card.chartColor} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={card.chartColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke={card.chartColor} strokeWidth={2} fillOpacity={1} fill={`url(#color-${idx})`} isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-6 p-5 flex flex-col transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">Revenue Overview</h3>
            <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 cursor-pointer transition-colors">
              Monthly <ChevronDown className="w-3 h-3" />
            </div>
          </div>
          <div className="flex-1 h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-[#f3f4f6] dark:stroke-[#334155]" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} className="fill-[#9ca3af] dark:fill-[#64748b]" dy={10} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11 }}
                  className="fill-[#9ca3af] dark:fill-[#64748b]"
                  tickFormatter={(value) => `₹${value / 100000}L`}
                />
                <RechartsTooltip 
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.2)', fontSize: '12px', backgroundColor: 'var(--tw-colors-gray-900)', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  wrapperClassName="dark:!bg-gray-800 dark:!text-white"
                />
                <Area type="monotone" dataKey="value" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" 
                  activeDot={{ r: 5, fill: '#fff', stroke: '#0d9488', strokeWidth: 2 }} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-3 p-5 flex flex-col transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">Order Status</h3>
            <button className="text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View All</button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center mt-2">
            <div className="h-[180px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ fontSize: '11px', borderRadius: '4px', border: 'none' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-gray-900 dark:text-white">2,350</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">Total Orders</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 w-full px-2">
              {orderStatusData.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-4 leading-tight">{item.value} ({(item.value / 2350 * 100).toFixed(1)}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-3 p-5 flex flex-col transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">Recent Activities</h3>
            <button className="text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View All</button>
          </div>
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activity.bg} ${activity.color} transition-colors`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug truncate whitespace-normal line-clamp-2 transition-colors">{activity.title}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 transition-colors">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Laboratories */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-4 p-5 flex flex-col transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">Top Laboratories</h3>
            <button className="text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View All</button>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2 mb-3 transition-colors">
              <div className="col-span-6">Laboratory</div>
              <div className="col-span-3 text-center">Total Orders</div>
              <div className="col-span-3 text-right">Revenue</div>
            </div>
            <div className="flex flex-col gap-3">
              {topLaboratories.map((lab) => (
                <div key={lab.id} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-6 flex items-center gap-2 overflow-hidden">
                    <div className="w-6 h-6 rounded bg-blue-50 dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 transition-colors">
                      <lab.icon className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate transition-colors">{lab.name}</span>
                  </div>
                  <div className="col-span-3 text-center text-xs text-gray-600 dark:text-gray-400 transition-colors">{lab.orders}</div>
                  <div className="col-span-3 text-right text-xs font-medium text-gray-800 dark:text-gray-200 transition-colors">{lab.revenue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-4 p-5 flex flex-col transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">Top Services</h3>
            <button className="text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View All</button>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2 mb-3 transition-colors">
              <div className="col-span-6">Service</div>
              <div className="col-span-3 text-center">Orders</div>
              <div className="col-span-3 text-right">Revenue</div>
            </div>
            <div className="flex flex-col gap-3">
              {topServices.map((service) => (
                <div key={service.id} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-6 flex items-center gap-2 overflow-hidden">
                    <div className="w-6 h-6 rounded bg-blue-50 dark:bg-[#1e293b] flex items-center justify-center shrink-0 transition-colors">
                      <service.icon />
                    </div>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate transition-colors">{service.name}</span>
                  </div>
                  <div className="col-span-3 text-center text-xs text-gray-600 dark:text-gray-400 transition-colors">{service.orders}</div>
                  <div className="col-span-3 text-right text-xs font-medium text-gray-800 dark:text-gray-200 transition-colors">{service.revenue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-[#131b2f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-4 p-5 flex flex-col transition-colors">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-4 transition-colors">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, idx) => {
              const bgClass = 'bg-gray-50 dark:bg-[#1e293b]';
              return (
                <button key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors gap-2 group">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgClass} ${action.color} transition-colors`}>
                    <action.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300 text-center leading-tight transition-colors">{action.name}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
