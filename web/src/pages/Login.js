import InputBox from '../components/Input/input';
import CustomButton from '../components/Button/button';
import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      const showSignUpSuccess = localStorage.getItem('showSignUpSuccess');
      if (showSignUpSuccess === 'true') {
        toast.success('Sign Up Success! You can login now', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });
        localStorage.removeItem('showLoginSuccess');
      }
    }, 100); // Small delay to ensure component is mounted

    return () => clearTimeout(timer);
  }, []);


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('showLoginSuccess', 'true');

        // Show success toast and navigate after a delay
        toast.success('Login successful!', {
          position: 'top-center',
          autoClose: 1500,
          onClose: () => {
            router.push('/student');
          }
        });
      } else {
        toast.error('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred while logging in.');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-row">
        <div className="bg-white w-1/2 h-screen">
          <div className="flex justify-center pt-20 font-bold text-4xl">
            Sign In To EduBridge
          </div>
          <div className="flex justify-start pl-20 pt-20">
            <div className="flex flex-col w-full pr-20">
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">EMAIL</div>
                <InputBox
                  className="bg-gray-100 rounded-full border-gray-300 h-10 w-full"
                  placeholder="  Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">PASSWORD</div>
                <InputBox
                  className="bg-gray-100 rounded-full border-gray-300 h-10 w-full"
                  placeholder="  Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center pt-20">
                <CustomButton
                  color="#2B2F4B"
                  title="Sign In"
                  onClick={() => handleLogin()}
                  className="flex px-8 py-3 text-white text-lg font-bold rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2B2F4B] w-1/2 h-screen">
          <div className="flex justify-center font-bold text-white justify-items-center pt-20 text-4xl">
            Welcome to login
          </div>
          <div className="flex justify-center pt-5 text-xl text-white">
            Don't have an account?
          </div>
          <div className="flex justify-center pt-20">
            <CustomButton
              color="white"
              title="Sign Up"
              onClick={() => router.push(`./Signup`)}
              className="flex px-8 py-3 text-black text-lg font-bold rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
