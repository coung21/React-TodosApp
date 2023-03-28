import React from 'react'

function Card({children}) {
  return (
    <div className='w-[30rem] h-[35rem] bg-white rounded-xl py-12 px-10'>
      {children}
    </div>
  )
}

export default Card