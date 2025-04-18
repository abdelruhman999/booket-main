import React, { useContext, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Show_DivContext } from '../pages/Home';
import List_Choice from './List_Choice';

export default function Confirm_Cancel() {
   const [show_Choise , setShow_Choise] = useState(false)
  return (
    <div className='w-[417px] xs:w-[320px] h-[568px] 
    flex flex-col items-center gap-[10px]
     text-[#393343] justify-between font-semibold p-[50px]'>
      
  
        <div className=' flex flex-col items-end gap-[10px]'>
        <p className='text-lg self-end '>سبب الغاء الحجز</p>
          <div 
             onClick={()=>{
                setShow_Choise(!show_Choise)
            }}
        className={`flex relative  border border-gray-200
        w-[327px] xs:w-[270px] h-[60px] justify-between p-[10px] text-[#374957]
            rounded-xl gap-[10px] cursor-pointer 
            items-center `}>
       
            <MdOutlineKeyboardArrowDown />
            <p className='text-sm'>حدد السبب</p>
            <div     
            className={`absolute w-full 
            inset-0  rounded-xl 
              border border-gray-200 
             ${show_Choise ? 'animate__bounceInDown animate__animated ' 
                : 'hidden'
              }
             `}
             >
              <List_Choice
              header = {'حدد السبب'}
              li={[
                ' Emergency family circumstances',
                'Sudden change in travel plans',
                'Personal reasons or unforeseen circumstances',
                ' Health emergency or illness',
                ' Work obligations or new commitments',
                ' Financial issues or insufficient budget for travel',
              ]}
              />      
            </div>
            
       </div>

        <p className='text-lg self-end '>تعليقات</p>
          <div 
        className={`flex   border border-gray-200
        w-[327px] xs:w-[270px] h-[106px] justify-end p-[10px] text-[#393343]
            rounded-xl gap-[10px] 
          `}>
            <p className='text-xs '>اكتب السبب هنا</p>
      
        </div>
        </div>

        <div  
                className='
                h-[56.1px] text-red-500
                flex justify-center
                items-center shadow-lg 
                cursor-pointer
                rounded-xl border border-red-500
                    w-[275px] gap-[10px]'>
                    <p className='font-semibold'>الغاء التذكره </p>
        </div>

    </div>
  )
}
