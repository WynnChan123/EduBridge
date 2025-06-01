import { Bell, User2 } from 'lucide-react';
import { menuItems } from '../SideBar/sidebar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const TopNavbar = ({ userName, role}) => {

  const router = useRouter();
  const [pathname, setPathname] = useState('Home');

  useEffect(()=> {
    const currentPathname = router.pathname;
    const currentItem = menuItems.find(item => item.href === currentPathname);
    setPathname(currentItem ? currentItem.label : 'Home');
  }), [router.pathname];

  return (
    <div className="bg-blue-100 w-full flex justify-between items-center px-6 py-3 shadow-sm">
      <h1 className="text-lg font-semibold">{pathname}</h1>
      <div className="flex items-center space-x-6">
        <Bell className="text-gray-700" />
        <div className="flex items-center space-x-2">
          <User2 className="text-gray-700" />
          <div className="text-sm">
            <div className="font-medium">{userName}</div>
            <div className="text-gray-500">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

