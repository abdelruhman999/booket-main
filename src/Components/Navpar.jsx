import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../assets/Sekka Logo.png"; 
import { Darkmood, show_Div_Sitting_context } from '../pages/Home';
import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg'
import { FaList } from "react-icons/fa6";
import logo from '../assets/WhatsApp_Image_2025-04-18_at_04.07.13_e9a3b56d-removebg-preview.png'
import { HiXMark } from "react-icons/hi2";

export default function Navpar() {
  const {darkMode} = useContext(Darkmood)
  const {show_Div_Sitting , setShow_Div_Sitting} = useContext(show_Div_Sitting_context)
  const [small_div , setSmall_div] = useState(false)
  return (
    

    <div className={`bg-gray-800 text-white
      shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-50 `}
    >
      {/* شاشات كبيره فقط  */}
      <div className='xs:hidden   w-full relative font-Inter font-medium text-[18px]   flex justify-between items-center  '>
       <Link
       to={'/'}
       className=" md:w-1/7 p-[2px]  flex w-[200px] justify-start">
        <img src={homeImage} alt="Train Booking" className="max-w-full h-auto" />
      </Link>

      <div className="flex gap-[32px] ">
        <p
        onClick={()=>{
        const  get_uper_section = document.getElementById('Home')
          if(get_uper_section){
            get_uper_section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="cursor-pointer hover">
          Home
        </p>

        <p
        onClick={()=>{
        const  get_uper_section = document.getElementById('TimeTable')
          if(get_uper_section){
            get_uper_section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="cursor-pointer hover">
          TimeTable
        </p>

        <p
        onClick={()=>{
        const get_uper_section = document.getElementById('Booking-us')
          if(get_uper_section){
            get_uper_section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="cursor-pointer hover">
          Booking
        </p>

        <p
        onClick={()=>{
         const get_uper_section = document.getElementById('About')
          if(get_uper_section){
            get_uper_section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="cursor-pointer hover">
          About Us
        </p>

        <Link to={'/settings'}className="cursor-pointer hover">Settings</Link>

        <p
        onClick={()=>{
        const   get_uper_section = document.getElementById('Contact-us')
          if(get_uper_section){
            get_uper_section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="cursor-pointer hover">
          Contact Us
        </p>

      </div>

        <div className='pr-[20px]  flex items-center gap-[30px] '>
 
          <div className='flex  xs:justify-end gap-[6px] items-center'>
              <img src={logo1} className='w-[29px] h-[18px]' />
              <select className='bg-gray-800 text-sm cursor-pointer '>
                <option value="">English</option>
                <option value="">Arabic</option>
              </select>

          </div>
        <div className='w-[1px] h-[50px]  bg-white'></div>
        <div
        onClick={()=>{
          setShow_Div_Sitting(!show_Div_Sitting)
        }}
         className='flex  cursor-pointer  items-center gap-[10px]'>
          <img className='size-[60px]' src={logo} alt="logo" />
          <p className='text-white text-[14px] '>
          Shahd
          <br />
          Elmnyar
          </p>
        
        </div>
  
        </div>
      </div>
          {/* شاشات صغيره بس  */}

        <div className='hidden xs:block   '>
         <div className=' p-4   w-full relative font-Inter font-medium text-[18px] flex justify-between items-center'>
         <Link
          to={'/'}
          className="   flex  w-[100px] justify-start">
            <img src={homeImage} alt="Train Booking" className=" h-auto" />
          </Link>
          {
            !small_div ? (
          <div className='pr-[10px]'>
          <FaList
          onClick={()=>{
            setSmall_div(!small_div)
          }}
          className='text-xl text-blue-500 duration-200 cursor-pointer '/>
          </div>

            ):

            <div className='pr-[10px] '>
            <HiXMark 
            onClick={()=>{
              setSmall_div(!small_div)
            }}
            className='text-2xl hover:text-red-500 duration-200 cursor-pointer '/>
            </div>
          }

          <div className={`bg-blue-800 w-[250px] h-[300px] absolute
           top-[75px] right-[20px]
           rounded-lg shadow-lg flex 
           flex-col gap-[20px] p-[20px] duration-200
           ${small_div ? ' scale-100' : ' scale-0'}
           `}>
            <div className='flex justify-between  items-center'>
            <p>1</p>
            <p>2</p>
            </div>
            <p>1</p>
            <p>1</p>
          </div>
         
         </div>
        </div>
      
      
    </div>

  );
}


