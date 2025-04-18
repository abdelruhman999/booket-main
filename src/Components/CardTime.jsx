import React from 'react'

export default function CardTime(props) {
  return (
    <div className={` 
        shadow-lg shadow-gray-500 flex cursor-pointer  rounded-lg
       justify-center w-[63px] h-[34px] pl-[10px]  flex-col
      `}
      style={{
           backgroundColor: props.color ,
          }}
      >
          <p className='text-sm text-white'>{props.Time}</p>
        
      </div>
  )
}
