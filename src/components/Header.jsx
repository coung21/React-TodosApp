import React from 'react'
import Date from './Date'
import { HiPlusSm } from 'react-icons/hi'

function Header(props) {
  return (
    <div className=''>
      <div className='flex justify-between'>
        <Date />
        <button className='w-14 h-14 bg-[#5a74e1] rounded-full text-3xl font-roboto flex justify-center items-center'>
          <HiPlusSm style={{ color: 'white' }} />
        </button>
      </div>
      <p className='font-roboto text-[#667ee7] font-bold text-md'>3 Tasks</p>
    </div>
  );
}

export default Header