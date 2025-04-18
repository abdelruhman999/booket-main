import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.css";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="container">
      <div className="form">
        <img src="/assets/register1.png" alt="Register Illustration" className="register__img" />
        <form className="form-section">
          <img src="/assets/sekka-removebg-preview.png" alt="Logo" className="logo_img" />
          <h2 className="form__title">Register</h2>
          <div className="mb-3">
            <input type="text" placeholder="Name" id="username" required />
            <span className="icon">
            {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#A392BE"></path>
                        <path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="#A392BE"></path>
                        </svg>}
            </span>
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Email" id="Email" required />
            <span className="icon">
            {<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#A392BE"></path>
                                <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#A392BE"></path>
                                </svg>}
            </span>
          </div>
          <div className="mb-3">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              id="password"
              required
            />
             <span className="icon">
              {<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#A392BE"></path>
                                <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#A392BE"></path>
                                </svg>}
            </span>
            <span
              className="toggle-pass"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="mb-3">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              required
            />

            <span className="icon">
              {<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#A392BE"></path>
                                <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#A392BE"></path>
                                </svg>}
            </span>
            <span
              className="toggle-pass"
              onClick={toggleConfirmPasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button type="submit" className="btn1">
            Register
          </button>
          <p className="new_account">
            Do You Have an account?{" "}
            <a href="./login" className="login_link">
              Login
            </a>
          </p>
          <div className="google-btn">
            <img src="/assets/google.png" className="google-logo" />
            <span>Google</span>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
