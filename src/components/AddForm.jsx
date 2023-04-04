import React from 'react'
import {TiTick} from 'react-icons/ti'
import {MdCancel} from 'react-icons/md'


function AddForm() {
  return (
    <form className='mb-4 flex justify-between items-center'>
      <div>
        <button className=''>
          <TiTick size={25} style={{ color: 'green' }} />
        </button>
        <button className=''>
          <MdCancel size={25} style={{ color: 'red' }} />
        </button>
      </div>
      <input
        type='text'
        className='border-2 border-gray-300 font-medium font-roboto bg-gray-50 focus:outline-indigo-600 focus:bg-[#ebebeb] rounded-md min-w-[20rem] h-8 indent-4'
      />
    </form>
  );
}

export default AddForm