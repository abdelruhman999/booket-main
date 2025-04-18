import React, { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const OTP = () => {
    const navigate = useNavigate(); 
        const handleVerify = () => {
          navigate("/changepass"); 
        };
  const [time, setTime] = useState(90);

  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };
  return (
    <div className="container">
      <div className="form">
        <img
          src="/assets/Login1.png"
          alt="Login Illustration"
          className="form__img"
        />
        <form className="form-section">
          <p className="new__title">OTP Verification</p>
          <p className="otp-container">We've sent a code to Example@gmail.com</p>
          <img
            src="/assets/otp.png"
            alt="Logo"
            className="logo_img"
          />
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="otp-input"
              />
            ))}
          </div>
          <div className="otp-new">
            <p>Resend Code to</p>
            <div className="otp-time">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
          </div>
          <button type="button" className="btn1" onClick={handleVerify}>
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
export default OTP;