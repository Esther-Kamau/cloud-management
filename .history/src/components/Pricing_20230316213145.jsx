import React from 'react'

import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
    
        </div>
        <div className='mx-auto py-12 max-w-[1240px]'>
<div className='py-8 text-center text-slate-300'>
<h2 className='text-3xl uppercase'>Pricing </h2>
<h3 className='text-5xl text-white py-8 font-bold'>The right place for your <span className='text-blue-200'> WORK</span></h3>
<p className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel, placeat harum doloremque, iste, quaerat quo exercitationem inventore reprehenderit ex aut. Accusamus quibusdam harum esse incidunt, illo modi quos dignissimos.</p>
</div>

<div className='grid md:grid-cols-2'>
<div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
</div>
        </div>
    </div>
  )
}

export default Pricing