import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-3'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl font-bold md:text-7xl'>Cloud Management</h1>
                <p className='text-2xl mb-3'>This is our <span className='text-blue-600 font-bold'>CLOUD TECH</span> Brand</p>
                <button className='py-3 px-6 sm:w-[60%]'>Let's get you started</button>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <img src={bgImg} alt='bg' className='w-full h-full'/>
                </div>
                <div>
                    <p>Data Service</p>
                    <div>
                        <p>Icon. App Security</p>
                        <p>Icon. Dashboard Designs</p>
                        <p></p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero