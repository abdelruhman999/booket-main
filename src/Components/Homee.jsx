import React, { useContext } from "react";
// تأكد من إنشاء ملف CSS لو هتحتاج تنسيقات إضافية
import homeImage from "../assets/image 1.png"; 
import { Darkmood } from "../pages/Home";

const Home = () => {
  const {darkMode} = useContext(Darkmood)
  return (
    <section id="home" className={` flex  
       flex-col md:flex-row 
      items-center justify-between 
      ${darkMode ? 'bg-gray-900  ' :''}
    `}>
      {/* صورة على اليسار */}
      
  {/* الصورة على الشمال */}
  <div className=" w-full flex justify-start ">
  <img src={homeImage} alt="Train Booking" className="max-w-full h-auto ml-0" />
</div>




      {/* النصوص على اليمين */}
      <div className="home__content w-full md:w-1/2  text-center md:text-right p-4">
        <h1 className={`text-2xl md:text-4xl font-bold  ${darkMode ? 'text-white   ' :' text-gray-900'}`}>
          طريقة <span style={{ color: '#7367F0' }}>سريعة وسهلة</span> لحجز
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          مكانك في <span style={{ color: '#7367F0' }}>القطار</span>
        </h1>
        <p className={`   mt-4 text-lg  ${darkMode ? 'text-white   ' :' text-gray-700'}`}>
          خطط بذكاء وسافر بشكل أفضل. سكه تجعل شبكة 
        </p>
        <p className={`  text-lg  ${darkMode ? 'text-white   ' :' text-gray-700'}`}>
         .القطارات في مصر بين يديك 
        </p>
      </div>
    </section>
    
  );
};

export default Home;
