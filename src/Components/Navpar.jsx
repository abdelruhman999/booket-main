import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../assets/Sekka Logo.png"; 


export default function Navpar({ darkMode, setDarkMode }) {
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-[#] '}
      w-full font-Inter font-medium text-[18px]   flex justify-between items-center 
      shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-50 relative`}
    >

       <div className="home__image md:w-1/7 p-[2px]  flex w-[200px] justify-start">
        <img src={homeImage} alt="Train Booking" className="max-w-full h-auto" />
      </div>

      <div className="flex  gap-[32px] ">
        <Link to={'/'}className="cursor-pointer hover">Home</Link>
        <Link to={'/TimeTable'}className="cursor-pointer hover">TimeTable</Link>
        <Link to={'/Booking'}className="cursor-pointer hover">Booking</Link>
        <Link to={'/About Us'}className="cursor-pointer hover">About Us</Link>
        <Link to={'/Settings'}className="cursor-pointer hover">Settings</Link>
        <Link to={'/Contact Us'}className="cursor-pointer hover">Contact Us</Link>
      </div>

        <div className='pr-[20px] '>

      <div
        className=" relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 
        rounded-full  cursor-pointer transition-all duration-300"
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`absolute  w-6 h-6 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 
            ${darkMode ? 'translate-x-8 bg-gray-900' : 'translate-x-0 bg-yellow-400'}`}
        >
          {darkMode ? '🌙' : '☀️'}
        </div>
      </div>
        </div>
      
      
    </div>
  );
}


