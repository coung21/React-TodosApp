import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { MdCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { taskUiAction } from '../store/taskUI-reducer';
import { taskAction } from '../store/tasks-reducer';
import { useDateGenerator } from '../hooks/useDateGenerator';
import { useIdGenerator } from '../hooks/useIdGenerator';

function AddForm(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const creationDate = useDateGenerator();
  const idGenerate = useIdGenerator();
  const dispatch = useDispatch();
  function finishFormHandler() {
    dispatch(taskUiAction.AddForm(false));
  }
  function enterValueHandler(e) {
    setEnteredValue(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const newTaskValue = enteredValue;
    if(!newTaskValue){
       dispatch(taskUiAction.AddForm(false));
       return
    }
    dispatch(
      taskAction.addTask({
        id: idGenerate(),
        taskName: newTaskValue,
        time: creationDate(),
      })
    );
    setEnteredValue('');
    dispatch(taskUiAction.AddForm(false))
  }

  return (
    <form
      onSubmit={submitHandler}
      className={`mb-4 flex justify-between items-center ${props.className}`}
    >
      <div>
        <button type='submit'>
          <TiTick size={25} style={{ color: 'green' }} />
        </button>
        <button type='button' onClick={finishFormHandler}>
          <MdCancel size={25} style={{ color: 'red' }} />
        </button>
      </div>
      <input
        value={enteredValue}
        onChange={enterValueHandler}
        type='text'
        className='border-2 border-gray-300 font-medium font-roboto bg-gray-50 focus:outline-indigo-600 focus:bg-[#ebebeb] rounded-md min-w-[20rem] h-8 indent-4'
      />
    </form>
  );
}

export default AddForm;
