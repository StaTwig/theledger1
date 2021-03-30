import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/ABInBev.png";

import "./style.css";

const Login = ({ mobileNumber, onMobileChange, errorMessage, onSendOtp }) => {
  return (
    <div className="loginScreen">
      <div className="align-center pb-5 pt-5">
        <h2 className="titleSubHeading">Welcome Back!</h2>
        <span className="titleSubHeading"><span className="titleHeading">Login</span> to continue.</span>
      </div>

      <div className="loginUserBlock justify-content-center">
        <div className="form-group">
          <label htmlFor="username" className="userNameLabel">Username/ Mobile No.</label>
          <input type="text" name="username" className="form-control username" onChange={onMobileChange} value={mobileNumber} />
          {
            errorMessage && <div className="alert alert-danger">{errorMessage}</div>
          }
          <button
            onClick={onSendOtp}
            className={`width100 btn mt-4`}
            type="button"
          >
            Send OTP
          </button>
          <p className="signUpDesc align-center mt-3 ">Don't have an account? <Link className="link" to="/signup"><b>Sign Up</b></Link></p>
        </div>
      </div>
      <div className="col text-center footer-logo">
        <img src={logo} width={60} />
      </div>
    </div>
  );
};

export default Login;
