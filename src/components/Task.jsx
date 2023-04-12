import React, { useState, useEffect } from 'react';
import '../utils/animations/strike.css';
import { CSSTransition } from 'react-transition-group';
import { taskAction } from '../store/tasks-reducer';
import { useDispatch} from 'react-redux';

function Task(props) {
  const {id , name, time} = props
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setTimeout(()=> {
     dispatch(taskAction.removeTask(id)); 
    }, 600)
  };

  return (
    <CSSTransition
      in={!isChecked}
      timeout={500}
      classNames='fade'
      unmountOnExit
    >
      <li className='mb-4 flex justify-between items-center relative'>
        <div className='flex item justify-between gap-3'>
          <input
            className='form-checkbox h-6 w-6 rounded cursor-pointer'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <label
            className={`text-lg font-roboto text-[#646469] tracking-wide ${
              isChecked && 'strike'
            }`}
          >
            {name}
          </label>
        </div>
        <p className='text-sm font-roboto text-[#646469] opacity-75'>{time}</p>
      </li>
    </CSSTransition>
  );
}

export default Task;
