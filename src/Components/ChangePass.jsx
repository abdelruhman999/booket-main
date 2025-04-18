import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ChangePass = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    
    <div className="container">
      {showSuccessMessage ? (
        <div className="form">
        <img src="/assets/login1.png" alt="Register Illustration" className="register__img" />
        <form className="form-section" onSubmit={handleResetPassword}> 
        <div className="success">
            <p className="prompet">Reset Password</p>
            <div className="success-message">
            <div className="message-content">
                <span className="success-icon"><img className="success-icon" src="/assets/correct-icon.png" alt="checkmark"/></span>
                <p>Password has been changed successfully</p>
                <button className="btn-login" onClick={redirectToLogin}>
                Login
                </button>
            </div>
            </div>
        </div>
        </form>
        </div>
      ) : (
        <div className="form">
          <img src="/assets/login1.png" alt="Register Illustration" className="register__img" />
          <form className="form-section" onSubmit={handleResetPassword}>
            <img src="/assets/sekka-removebg-preview.png" alt="Logo" className="logo_img" />
            <h2 className="forget__title">Reset Password</h2>

            <div className="mb-3">
              <p className="newpass">Password</p>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                required
              />
               <span className="icon2">
             {<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                               
                                    </svg>}
            </span>
              <span
                className="toggle-newpass"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="mb-3">
              <p className="newpass">Password Confirmation</p>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                required
              />
               <span className="icon2">
             {<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    </svg>}
            </span>
              <span
                className="toggle-newpass"
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button type="submit" className="btn1">
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChangePass;

