import React, { createContext, useContext, useState } from "react";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navpar from "../Components/Navpar";
import Curds from "../Components/Curds";
import Booking from "../Components/Booking";
import Steps from "../Components/Steps";
import Settings from "../Components/Settings";
import Homee from "../Components/Homee";
import Search from "../Components/Search";
import About from "../Components/About";
// import Login from "../Components/Login";
// import Register from "../Components/Register";
// import PasswordToggle from "../Components/PasswordToggle";
// import ForgetPassword from "../Components/ForgetPassword";
// import ChangePass from '../Components/ChangePass';
// import OTP from '../Components/OTP';


export const Showcontext = createContext();
export const Countercontext = createContext();
export const ActiveContext = createContext();
export const Show_DivContext = createContext();
export const Darkmood = createContext()
export default function Home() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const [counter, setCounter] = useState(0);
  const [show_Div, setShow_Div] = useState(0);
  const [darkMode, setDarkMode] = useState(false); // التحكم في الوضع المظلم
  const [language, setLanguage] = useState('ar');
  return (
    
   
      <Showcontext.Provider value={{ show, setShow }}>
        <Countercontext.Provider value={{ counter, setCounter }}>
          <ActiveContext.Provider value={{ active, setActive }}>
            <Show_DivContext.Provider value={{ show_Div, setShow_Div }}>
            <Darkmood.Provider value={{ darkMode, setDarkMode }}>
    <div
      className={`flex relative flex-col 
         items-center gap-[50px]
         w-full ${darkMode ? "bg-gray-900" :''} min-h-screen 
         transition-colors
          duration-300`}
    >
         
              <div className="w-full">
              <Navpar darkMode={darkMode} setDarkMode={setDarkMode} />

       
              <Routes>
                <Route path="/settings" element={<Settings />} />
              </Routes>
              <Routes>
                <Route path="/" element={
                  <>
                  <Homee />
                  <Search />
                  </>
                } />
              </Routes>
              
              <Routes>
              
              <Route path="/" element={

            <div className="justify-center   xs:p-0 gap-[10px] flex flex-wrap mb-0">
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />

                {show && (
                  <div className="absolute inset-0   w-full   bg-black  bg-opacity-50 flex justify-center   z-50">
                    <div className="absolute top-[30%]">
                      <Steps />
                    </div>
                  
                  </div>
                )}
            </div>

              }
               />
              </Routes>


              <Routes>
             <Route path="/" element={
                  <>
                  <About />
                  <Booking />
                  </>
              }
               />
              </Routes>

              {/* <Login/>
              <Register/>
              <PasswordToggle/>
              <ForgetPassword/>
              <ChangePass/>
              <OTP/> */}
              </div>
            
                          

    </div>
            </Darkmood.Provider>
            </Show_DivContext.Provider>
          </ActiveContext.Provider>
        </Countercontext.Provider>
      </Showcontext.Provider>
   
  );
}
