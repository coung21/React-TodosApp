import { useState } from 'react';
import moment from 'moment';
import { current } from '@reduxjs/toolkit';
export function useDateGenerator(){
  const [time , setTime] = useState(moment().format('LT'))

  return () => {
    const currentTime = moment().format('LT');
    setTime(currentTime)
    return time
  }
}


