import React from 'react'

export default function Cards(props) {
  return (
   
         <div className={` 
              shadow-lg shadow-gray-500 flex cursor-pointer  rounded-lg
             justify-center pl-[10px]  flex-col
            `}
            style={{
                 backgroundColor: props.color ,
                 width:props.width , 
                 height : props.height 
                }}
            >
                <p className='text-sm text-white'>{props.DayName}</p>
                <p className=' text-sm text-white '><span className='text-lg font-semibold'>{props.DayNumbre} </span>{props.month}</p>
            </div>
 
  )
}
