import React from 'react'
import Date from './Date'
import { HiPlusSm } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { taskUiAction } from '../store/taskUI-reducer';

function Header(props) {
  const dispatch = useDispatch()
  function onAddForm(){
    dispatch(taskUiAction.AddForm(true))
  }
  return (
    <div className=''>
      <div className='flex justify-between'>
        <Date />
        <button onClick={onAddForm} className='w-14 h-14 bg-[#5a74e1] rounded-full text-3xl font-roboto flex justify-center items-center'>
          <HiPlusSm style={{ color: 'white' }} />
        </button>
      </div>
      <p className='font-roboto text-[#667ee7] font-bold text-md'>3 Tasks</p>
    </div>
  );
}

export default Header