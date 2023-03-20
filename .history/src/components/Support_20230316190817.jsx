import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div>
<div>
    <div>
        <img src={supportImg} alt="" />
    </div>
    <div>
        <div>
            <h1>24/7 Support</h1>
            <p>Finding the right <span className='text-xl font-medium'>SUPPORT TEAM</span></p>
            <p>Our support team is available 24/7 to answer any questions you may have. We're here to help!</p>
        
        </div>
    </div>
</div>

    </div>
  )
}

export default Support