import React, { useContext } from 'react'
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png'
import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg'
import { BsPersonCircle } from "react-icons/bs";
import { IoMdBookmarks } from "react-icons/io";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { ActiveContext, Darkmood, Show_DivContext, Showcontext } from '../pages/Home';
import Portofoilo from './Portofoilo';
import Booket from './Booket';
import { TbXboxXFilled } from "react-icons/tb";
import Cancel_Boket from './Cancel_Boket';
import Confirm_Cancel from './Confirm_Cancel';
import Privacy from './Privacy';
import Swal from "sweetalert2";
import { useEffect } from 'react';


export default function Settings() {
  const {active , setActive} = useContext(ActiveContext)
  const {show,setShow} = useContext(Showcontext)
  const {show_Div,setShow_Div} = useContext(Show_DivContext)
  const {darkMode, setDarkMode} = useContext(Darkmood)
   
  return (
    <div className={`flex xs:w-[300px] xs:gap-1 justify-between gap-[50px] xs:p-0 p-[20px] ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className={`relative pl-[150px] xs:pl-0 p-[10px] ${darkMode ? 'bg-gray-900' : ''}`}>
            {
              active === 0 ? 
              <Portofoilo/>
              :
              active === 1 ? 
              <Booket/>
              :
              active === 2 ? 
              <Privacy/>
              :
              ''
            }
             {show &&  active === 1 &&  (
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className={`absolute xs:w-[330px] xs:left-[-15px] shadow shadow-gray-400 border rounded-2xl top-[10%] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                 <TbXboxXFilled
                         onClick={()=>{
                           setShow(false)
                           setShow_Div(0)
                         }}
                           className='absolute text-5xl text-gray-300 hover:text-blue-500 duration-300 top-[-40px] xs:right-[-20px] xs:top-[-55px] right-[-40px] cursor-pointer' />
                    {
                      show_Div === 0 ?
                      <Cancel_Boket/>
                      :
                      <Confirm_Cancel/>
                    }
              </div>
            </div>
          )}
        </div>
        
        <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#374957]'} flex-col h-[550px] items-center shadow-lg shadow-gray-300 rounded-2xl gap-[10px] xs:w-[70px] xs:p-2 p-[10px]`}>
            <div className='flex xs:self-center self-start items-center xs:flex-col gap-2'>
                <div className='bg-yellow-500 rounded-full border-blue-600 border-[1px]'>
                <img src={logo} className='size-[53px]' />
                </div>
                <div className='flex flex-col xs:hidden'>
                    <p className='font-semibold xs:text-sm text-lg'>Shahd Elmnyar</p>
                    <p className={`text-sm xs:text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-[#535763]'}`}>shahdelmnyar@gmail.com</p>
                </div>
            </div>
            <div
            onClick={()=>{
              setActive(0)
            }}
            className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl xs:justify-center gap-[10px] cursor-pointer items-center ${active === 0 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
              <p className='text-xl xs:hidden'>الملف الشخصي</p>
              <BsPersonCircle className='text-2xl'/>
            </div>
            <div
            onClick={()=>{
              setActive(1)
            }}
            className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl xs:justify-center gap-[10px] cursor-pointer items-center ${active === 1 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
              <p className='text-xl xs:hidden'>الحجز</p>
              <IoMdBookmarks className='text-2xl'/>
            </div>
           
            <div 
            className={`flex border border-gray-200 w-full xs:justify-center justify-between p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
             <div className='flex w-full xs:justify-end gap-[6px] items-center'>
             <MdOutlineKeyboardArrowDown className='xs:hidden' />
             <p className='font-semibold xs:hidden text-lg'>English</p>
               <img src={logo1} className='w-[29px] h-[18px]' />
             </div>
             <div className='flex gap-2 items-center'>
              <p className='text-xl xs:hidden'>اللغه</p>
              <FaAcquisitionsIncorporated className='text-2xl xs:hidden'/>
             </div>
            </div>

            <div
            onClick={()=>{
              setActive(2)
            }}
            className={`flex border border-gray-200 w-full justify-end xs:justify-center p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 2 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
              <p className='text-xl xs:hidden'>سياسة الخصوصية</p>
              <MdOutlinePrivacyTip className='text-2xl'/>
            </div>
            <div
            onClick={()=>{
              Swal.fire({
                title: "هل أنت متأكد؟",
                text: "لن تتمكن من التراجع عن هذا!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "نعم، تسجيل الخروج!",
                cancelButtonText: "إلغاء",
              }).then((result) => {
                if (result.isConfirmed) {
                      Swal.fire("تم تسجيل الخروج!", "لقد تم تسجيل خروجك بنجاح.", "success");
                }
               })
            }}
            className={`flex border border-gray-200 w-full justify-end p-[10px] xs:justify-center rounded-xl gap-[10px] cursor-pointer items-center ${active === 3 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-[#FF1212]'}`}>
              <p className='text-xl xs:hidden'>تسجيل الخروج </p>
              <FaSignOutAlt className='text-2xl'/>
            </div>

            <div className={`h-[0.5px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

            <div
            className={`flex flex-col w-full justify-end p-[10px] gap-[10px] items-center ${darkMode ? 'text-white' : 'text-[#374957]'}`}>
                <div className='flex gap-[6px] justify-end w-full items-center'>
              <p className='text-xs xs:text-center font-semibold'> لون الموقع  </p>
              <FaRegQuestionCircle className='text-2xl'/>
                </div>
                <div
            className={`flex xs:flex-col w-full justify-center p-[10px] rounded-xl gap-[10px] items-center ${darkMode ? 'bg-gray-700' : 'bg-[#F0F0F0]'}`}>
          <div
          onClick={()=>{
            setDarkMode(true)
          }}
            className={`flex h-[32px] cursor-pointer justify-center p-[5px] w-[140px] rounded-xl gap-[10px] duration-500 items-center ${darkMode ? 'bg-gray-600 text-white' : ''}`}>
                <p className='font-semibold xs:hidden'>غامق</p>
                <MdModeNight className='text-2xl' />
          </div>

          <div
          onClick={()=>{
            setDarkMode(false)
          }}
            className={`flex justify-center h-[32px] p-[5px] cursor-pointer xs:w-fit w-[140px] rounded-2xl gap-[10px] duration-500 items-center ${darkMode ? 'text-white' : 'bg-white'}`}>
                <p className='font-semibold xs:hidden'>فاتح</p>
                <MdWbSunny className='text-2xl' />
         </div>
               
               </div>
            </div>
        </div>
    </div>
  )
}