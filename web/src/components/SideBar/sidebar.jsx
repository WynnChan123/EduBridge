// components/Sidebar.js
import {
  Home,
  Users,
  MessageSquare,
  BookOpen,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip'; // optional if using tooltips
import 'react-tooltip/dist/react-tooltip.css';
import { useRouter } from 'next/router';

export const menuItems = [
  { icon: <Home size={20} />, label: 'Home', href: '/student' },
  { icon: <Users size={20} />, label: 'Tutors Nearby', href: '/student/tutors' },
  { icon: <MessageSquare size={20} />, label: 'Messages', href: '/student/messages' },
  { icon: <BookOpen size={20} />, label: 'Enrolled Classes', href: '/student/classes' },
];

const Sidebar = ({ userName }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`bg-blue-100 h-screen p-3 flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'
        }`}
    >
      {!collapsed && (
        <div className="mb-4">
          <div className="font-semibold">Welcome to Edubridge,</div>
          <div>{userName}</div>
        </div>
      )}
      {/* Toggle button */}
      <div className="flex justify-end">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-black"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-6 space-y-4 flex-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={collapsed ? item.label : ''}
            className={`flex items-center gap-4 text-black hover:font-bold hover:bg-blue-200 p-2 rounded-md transition ${router.pathname === item.href ? `bg-blue-200` : ''}`}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
            {collapsed && (
              <div>
                <Tooltip id={`tooltip-${index}`} place="right" />
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <a
          href="/logout"
          data-tooltip-id="logout-tooltip"
          data-tooltip-content={collapsed ? 'Log Out' : ''}
          className="flex items-center gap-4 text-red-600 hover:bg-red-100 p-2 rounded-md transition"
        >
          <LogOut />
          {!collapsed && <span>Log Out</span>}
          {collapsed && (
            <Tooltip id="logout-tooltip" place="right" />
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

