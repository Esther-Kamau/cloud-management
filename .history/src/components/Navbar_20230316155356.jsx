import React from 'react'
import {MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='w-screen h-[100px] z-10 bg-dark-100 fixed drop-shadow-lg rounded-b-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
          <img className='h-[180px] w-[180px]' src={Logo} alt="Logoimg" />
                </div>
        </div>
        
        <MenuIcon className="w-5"/>
    </div>
  )
}

export default Navbar