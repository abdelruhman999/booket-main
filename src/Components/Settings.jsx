import React, { useContext } from 'react'

import { ActiveContext, Darkmood, Show_DivContext, Showcontext } from '../pages/Home';
import Portofoilo from './Portofoilo';
import Booket from './Booket';
import { TbXboxXFilled } from "react-icons/tb";
import Cancel_Boket from './Cancel_Boket';
import Confirm_Cancel from './Confirm_Cancel';
import Privacy from './Privacy';
import { useNavigate } from 'react-router-dom';
import Sitting_partone from './Sitting_partone';


export default function Settings() {
  const {active } = useContext(ActiveContext)
  const {show,setShow} = useContext(Showcontext)
  const {show_Div,setShow_Div} = useContext(Show_DivContext)
  const {darkMode} = useContext(Darkmood)
   
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
        
      <Sitting_partone/>
    </div>
  )
}