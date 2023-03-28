import React, {useState, useEffect} from 'react'
import moment from 'moment';


function Date() {
    const [currentDate, setCurrentDate] = useState(
      moment().format('dddd[,] MMM D')
    );


   useEffect(() => {
     const intervalId = setInterval(() => {
       setCurrentDate(moment().format('dddd[,] MMM D'));
     }, 60000 * 60);
     return () => clearInterval(intervalId);
   }, []);

  return (
    <h1 className='font-bold text-3xl text-[#646469]'>
      {currentDate}
    </h1>
  );
}

export default Date