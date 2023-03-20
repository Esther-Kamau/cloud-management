import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const Features = () => {
  return (
    <div className='h-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='font-bold text-center text-5xl'>One-Stop-Shop</h2>
            <p className='text-center text-2xl py-8 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, explicabo praesentium sapiente saepe, perferendis ipsa, animi facilis suscipit enim a beatae exercitationem. Labore cum nostrum facere sed id magni voluptate.</p>
<div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-4 pt-4' >
    <div className='flex '>
<CheckIcon className='mr-4 w-6 '/>
    </div>

</div>
        </div>
    </div>
  ) 
}

export default Features