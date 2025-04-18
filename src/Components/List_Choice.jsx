import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function List_Choice({header,li}) {
   
  return (
       <ul         
        className='bg-white rounded-xl
        p-[20px] flex flex-col
         gap-[20px] w-full
         shadow shadow-gray-300 '
                 >
                    <li className='flex items-center justify-between'>
                        <MdOutlineKeyboardArrowDown />
                        <p className='text-sm'> {header}</p>
                    </li>
                    {
                      li.map((el)=>{
                        return(
                          <React.Fragment key={el.index}>
                          <li>{el}</li>
                          <li className='bg-gray-200 w-full h-[1px]'></li>
                          </React.Fragment>
                        )
                       
                      })
                    }
                 
                  
                </ul>
  )
}
