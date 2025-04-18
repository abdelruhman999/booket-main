import { useContext } from "react";
import aboutImg from "../assets/About.png"; // تأكد من وضع الصورة في المسار الصحيح
import { Darkmood } from "../pages/Home";

const About = () => {
 
  return (
    <section
  id="about"
  className="flex items-center justify-center min-h-screen   px-5 py-8" // استخدم قيمة مناسبة للـ py
>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl">
        
        {/* صورة */}
        <div>
          <img
            src={aboutImg}
            alt="معلومات عنا"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* نص */}
        <div className="text-center md:text-right text-gray-800 dark:text-white">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">معلومات عنا</h1>
          <p className="text-gray-700 dark:text-gray-300 leading-loose">
            طريقة سريعة وسهلة لحجز مكانك في القطار طريقة سريعة وسهلة لحجز <br />
            مكانك في القطار طريقة سريعة وسهلة لحجز مكانك في القطار
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
