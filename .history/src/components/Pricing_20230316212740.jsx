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
    <div className=''>
        <span>Standard</span>
    </div>
    <div>
        <p>$49 <span>/mo</span></p>
    </div>
      
</div>
        </div>
    </div>
  )
}

export default Pricing