import React from 'react'
import {MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='w-screen h-[100px] z-10 bg-blue-900 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
          <img className='h-[180px] w-[180px]' src={Logo} alt="Logoimg" />
          <ul className='hidden md:flex'>
            <li className='text-white font-bold text-2xl'>Home</li>
            <li className='text-white font-bold text-2xl'>About</li>
            <li className='text-white font-bold text-2xl'>Contact</li>
            <li className='text-white font-bold text-2xl'>Contact</li>

          </ul>
                </div>
        </div>
        
        <MenuIcon className="w-6"/>
    </div>
  )
}

export default Navbar