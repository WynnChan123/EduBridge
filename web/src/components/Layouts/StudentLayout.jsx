import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/sidebar.jsx';
import TopNavbar from '../NavBar/navbar.jsx';

const StudentLayout = ({ children }) => {
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('Student Name');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    if (storedToken) {
      fetch('http://localhost:3000/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          setUserName(user.name);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userName={userName} />
      <div className="flex-1">
        <TopNavbar userName={userName} role="Student" />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;