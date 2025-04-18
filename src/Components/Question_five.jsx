import React from 'react'
import logo from '../assets/Capture.jpg'
import logo1 from '../assets/WhatsApp_Image_2025-03-07_at_03.40.46_97a1ec4c-removebg-preview.png'
import Button from './Button'
import { FaCheck } from "react-icons/fa";
import { FaTrainTram } from "react-icons/fa6";

export default function Question_five() {
  return (
     <div className='flex xs:w-[270px] xs:flex-col xs:gap-[55px] xs:items-center relative w-full gap-[40px] p-[20px]'>
          <div className='flex xs:h-[400px] h-[555px] w-[275px] items-center flex-col justify-between'>
            <div className='flex flex-col gap-[30px] items-center'>
          <img src={logo} alt="logo" />
          <div className='flex items-center justify-center size-[103px] rounded-full bg-[#7367F0]'>
          <FaCheck className='text-4xl text-white' />
          </div>
          <p className=' text-lg font-semibold text-[#7367F0] '>
          تم شراء التذكرة بنجاح
          </p>
    
            </div>
          <Button/>
          </div>
          <div className='bg-gray-300 xs:hidden absolute left-[42%] top-[60px] w-[0.8px] h-[478px]'></div>

          <div className='w-[382px] xs:w-[300px]
           rounded-2xl flex  gap-[50px]
           bg-white shadow-xl p-[20px]
           flex-col items-center text-[#393343]
          '>
              <div className='flex w-full xs:justify-center xs:gap-[50px] items-center  justify-between'>
                <div className='flex items-end xs:h-[50px]  gap-[10px] text-[#393343]'>
                  <p className='text-3xl'>14:02</p>
                  <p className='text-xs font-normal'>at 23m</p>
                </div>
                <div className='bg-[#7367F0] shadow 
                cursor-pointer rounded-xl
                p-[10px] xs:gap-0 xs:text-center text-gray-50 flex 
                items-center gap-[10px]'>
                  <p className='text-sm xs:text-xs'>درجة اولي مكيف</p>
                  <FaTrainTram className='' />
                </div>
              </div>

              <div className='flex border-b-2 
              p-[20px] border-dashed 
               w-full border-blue-600  relative
               flex-col'>
                <div className='flex text-2xl justify-between'>
                  <p>Cairo</p>
                  <p>Alexandria</p>
                </div>
                <div className='flex justify-between'>
                 
                </div>
              </div>
              <img src={logo1} className='size-[230px]' />
              <div className='flex justify-center gap-[40px] text-sm w-full text-[#393343]'>
                <p>It expires in</p>
                <p>23 h. 02min. 10sec.</p>
              </div>
          </div>
        
     
        </div>
  )
}
