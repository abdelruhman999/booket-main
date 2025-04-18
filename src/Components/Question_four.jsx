import React from 'react'
import logo from '../assets/WhatsApp_Image_2025-03-06_at_02.43.51_836acc1b-removebg-preview.png'
import Button from './Button'
import { IoIosLock } from "react-icons/io";

export default function Question_four() {
  return (
    <div className='p-[100px] xs:p-[50px] xs:w-[270px] flex items-center flex-col gap-[20px] '>
        <div>
        <p className='text-xl text-[#393343]'>Card Number</p>
        <div className='relative'>
          <input
          placeholder='2412 - 7152 - 3412 - 3456'
           className='border-[1px] border-black
            w-[354px] xs:w-[250px] pl-[50px]
        h-[57px] rounded-xl outline-none
        text-[#D0CFCE] text-lg '
          type="text" />

            <img src={logo} alt="" className='w-[36px] top-[18px] absolute h-[24px]' />
           
        </div>
        </div>


        <div className='flex w-full xs:justify-center xs:gap-[60px]  
        justify-between items-center'>
        <div>
            <p className='text-[#393343] text-xl'>Cvv</p>
            <input
            placeholder='327'
            type='text'
            className='border-[1px] border-black
             w-[59px]  outline-none text-center
              h-[42px] rounded-xl
              text-[#D0CFCE] 
               text-lg '
               />
        </div>

        <div className='flex flex-col items-center'>
         <p className='text-[#393343] text-xl font-normal'>Expiary Date </p>
          <div className='flex gap-[5px]'>
          <input
            placeholder='09'
            type='text'
            className='border-[1px] border-black
             w-[59px] outline-none text-center
              h-[42px] rounded-xl
              text-[#D0CFCE] 
               text-lg '
               />
             <p className='text-2xl'>/</p>
             <input
            placeholder='09'
            type='text'
            className='border-[1px] border-black
             w-[59px] outline-none text-center
              h-[42px] rounded-xl
              text-[#D0CFCE] 
               text-lg '
               />
          </div>
        </div>
        </div>

        <div>
        <p className='text-xl font-normal text-[#393343]'>Password</p>
        <div className='relative'>
          <input
          className='border-[1px] xs:w-[250px] pl-[30px] border-black w-[354px]
        h-[57px] rounded-xl flex  text-[#D0CFCE]  text-lg  items-center gap-[10px]'
          placeholder='*********'
          type="password"/>
            <IoIosLock  className='text-2xl  left-1 top-[13px] absolute text-blue-600 '/>
           
        </div>
        </div>
        <div className='xs:w-[270px]'>

        <Button/>
        </div>
    </div>
  )
}
