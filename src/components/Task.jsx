import React, {useState, useEffect} from 'react'
import './animation.css'

function Task() {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <li className='mb-4 flex justify-between items-center relative'>
      <div className='flex item justify-between gap-3'>
        <input
          className='form-checkbox h-6 w-6 rounded cursor-pointer'
          type='checkbox'
          onChange={setIsChecked}
          checked={isChecked}
        />
        <label
          className={`text-lg font-roboto text-[#646469] tracking-wide ${
            isChecked && 'strike'
          }`}
        >
          Morning walk
        </label>
      </div>
      <p className='text-sm font-roboto text-[#646469] opacity-75'>7:00pm</p>
    </li>
  );
}

export default Task