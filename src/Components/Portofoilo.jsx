import React from 'react'
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png'

export default function Portofoilo() {
  return (
    <div className='bg-white shadow shadow-gray-300 
    p-[20px]  xs:p-2 gap-[50px]  
    flex flex-col items-center
    rounded-xl'
    >
       <div className='bg-yellow-500 rounded-full
         '>
        <img src={logo} className='size-[125px] ' />
        </div>
        <div className='flex xs:flex-col gap-[20px]'>
            <div className='flex flex-col gap-[2px] items-end'>
            <p className='text-purple-400 text-sm'>البريد الالكتروني</p>
         <div
            className={` border border-gray-200
            w-[342px] xs:w-[200px] h-[53px] flex items-center 
             p-[10px] text-[#374957]
             rounded-xl gap-[10px] cursor-pointer 
              justify-end `}>
              <p className='text-sm font-semibold'>shahdelmnyar@gmail.com</p>
             
            </div>
            </div>
            <div className='flex flex-col gap-[2px] items-end'>
            <p className='text-purple-400'>الاسم كامل</p>
         <div
            className={` border border-gray-200
            w-[342px] xs:w-[200px] h-[53px] flex items-center 
             p-[10px] text-[#374957]
             rounded-xl gap-[10px] cursor-pointer 
              justify-end `}>
              <p className='text-sm font-semibold'>Shahd Elmnyar</p>
             
            </div>
            </div>
        </div>
        <div
        className='bg-[#7367F0] 
        h-[50.1px] xs:w-[200px] w-[350px] text-white
        flex justify-center
        items-center shadow-lg cursor-pointer
        rounded-xl'>
            حفظ
    </div>

    </div>
  )
}
