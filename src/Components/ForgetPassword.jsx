import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
        const navigate = useNavigate(); 
      
        const handleVerify = () => {
          navigate("/otp"); 
        };
          
  return (
    <div className="container">
      <div className="form">
        <img src="/assets/Login1.png" alt="Login Illustration" className="form__img" />
        <form className="form-section">
          <img src='/assets/sekka-removebg-preview.png' alt="Logo" className="logo_img" />
          <h2 className="forget__title">Forget Password</h2>
          <div className="mb-3">
            <input type="email" placeholder="Email" id="Email" required />
            <span className="icon">
              {<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#A392BE"></path>
                                <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#A392BE"></path>
                                </svg>}
            </span>
          </div>

          <button 
          type="button" 
          className="btn1" 
          onClick={handleVerify}>
            verify Email
          </button>
          <p className="new_account">
            Do You Have account?{" "}
            <a href="./login" className="login_link">
              Login
            </a>
          </p>
          
        </form>
      </div>
    </div>
  );
};


export default ForgetPassword;
