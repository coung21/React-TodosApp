import React from 'react'
import {TiTick} from 'react-icons/ti'
import {MdCancel} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { taskUiAction } from '../store/taskUI-reducer';


function AddForm(props) {
  const dispatch = useDispatch()
  function finishFormHandler(){
    dispatch(taskUiAction.AddForm(false))
  }
  return (
    <form className={`mb-4 flex justify-between items-center ${props.className}`}>
      <div>
        <button className=''>
          <TiTick size={25} style={{ color: 'green' }} />
        </button>
        <button onClick={finishFormHandler}>
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