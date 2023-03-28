import React from 'react'

function Task() {
  return (
    <li className='mb-4 flex justify-between items-center'>
      <div className='flex item justify-between gap-3'>
        <input
          className='w-6 h-6 rounded-full cursor-pointer'
          type='checkbox'
        />
        <label className='text-lg font-roboto text-[#646469] tracking-wide'>
          Morning walk
        </label>
      </div>
      <p className='text-sm font-roboto text-[#646469] opacity-75'>7:00pm</p>
    </li>
  );
}

export default Task