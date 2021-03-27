import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Key from '../../assets/icons/key.png';
import User from '../../assets/icons/mail.png';
import hide from '../../assets/icons/hide.png';
import logo from '../../assets/brands/VaccineLedgerlogo.svg';
import eye from '../../assets/icons/eye.png';

const FormLoginPage = (props) => {
  const { email, onEmailChange, errorMessage, onSendOtp } = props;
  const onkeydown = (event) => {
    if (event.keyCode  === 13) {
        onSendOtp();
    }
   }
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="mobile-header">
            <div className="branding">
                <img src={logo} alt="vaccineledger" />
            </div>
</div>
          <div className="row">
          <div className="col-sm-6 col-lg-6">
            <div className="form-content">
              <img className="logo" src={logo} />
              <h1>Welcome Back,</h1>
              <p>Login to continue</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-5">
            <div className="card">
              <div className="card-body">
                <div className="login-form mt-2">
                  <div className="card-title mb-4">Login</div>
                  <div className="form-group mt-5 ml-5 mr-5">
                    <img alt="" src={User} className="icon imgs" />
                    <input type="text" className="form-control"
                      value={email}
                      onChange={onEmailChange}
                      placeholder="Email ID/Mobile Number" />
                  </div>

                  {
                    errorMessage && <div className="alert alert-danger">{errorMessage}</div>
                  }
                  <div className="text-center mt-5">
                    <button type="button" className="btn btn-primary" onClick={onSendOtp}>
                      SEND OTP
                    </button>
                  </div>
                  <div className="signup-link text-center mt-2">Don't have an account? <Link to="/signup">Signup</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLoginPage;


/* <Link to="/forgotPassword" className="forgot-link">Forgot Password?</Link>
                  <div className="checkbox-group mb-2">
                    <input type="checkbox" className="mr-1" /> <span>Remember me</span>
                  </div> */

