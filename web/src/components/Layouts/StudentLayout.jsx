import { React } from 'react';
import Sidebar from '../SideBar/sidebar.jsx';
import TopNavbar from '../NavBar/navbar.jsx';

const StudentLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar userName="Student Name" role="Student" />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout; 