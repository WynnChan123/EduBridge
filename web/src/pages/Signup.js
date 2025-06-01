import React, { Component } from 'react'
import InputBox from '../components/Input/input';
import DropDownMenu from '../components/SignUp/dropdown';
import { useState } from 'react';
import CustomButton from '../components/Button/button';
import Image from 'next/image';
import { BanknoteX, LocationEdit, BanknoteArrowDown } from 'lucide-react';

const Signup = () => {
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value)
  }
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-white w-1/2 h-screen">
          <div className="flex justify-center pt-20 font-bold text-4xl text-black">Sign Up</div>
          <div className="flex justify-start pl-20 pt-15">
            <div className="flex flex-col w-full pr-20">
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">USERNAME</div>
                <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full hover:bg-gray-200" placeholder="  Name" />
              </div>
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">EMAIL</div>
                <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full hover:bg-gray-200" placeholder="  Email" />
              </div>
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">PASSWORD</div>
                <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full hover:bg-gray-200" placeholder="  Password" />
              </div>
              <div className="flex flex-col space-y-3 w-full">
                <div className="font-bold pt-10 text-lg">ROLE</div>
                <DropDownMenu className="flex w-1/3 rounded-full h-8" color="secondary" onChange={handleChange} value={role} />
              </div>
              <div className="flex justify-end pt-15">
                <a className="hover:cursor-pointer text-blue-600" href="./Login">Have an account? Back to login</a>
              </div>
              <div className="flex justify-center pt-10">
                <CustomButton
                  color="#2B2F4B"
                  title="Sign Up"
                  onClick={() => alert('Button Pressed!')}
                  className="flex px-8 py-2 text-white text-lg font-bold rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-300 w-1/2 h-screen flex flex-col">
          <div className="font-bold text-lg text-black pt-20 flex justify-center">Start utilizing EduBridge today!</div>
            <div className="flex flex-row space-x-32">
            <div style={{ position: 'relative', width: '200px', height: '200px' }} className="flex justify-start ml-20 mt-10">
              <Image
                src="/Teach.svg"
                alt="Teaching illustration"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="flex flex-col">
            <div className="pt-10">
              <BanknoteX width="100" height="50"/>
              <div>No upfront cost required</div>
            </div>
                        <div className="pt-10">
              <LocationEdit width="100" height="50"/>
              <div>National education</div>
            </div>
              <div className="pt-10">
              <BanknoteArrowDown width="100" height="50"/>
              <div>Low commission rate</div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
