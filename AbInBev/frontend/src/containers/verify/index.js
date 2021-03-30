import React, { useState, useCallback } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import {sendOtp, setCurrentUser, verifyOtp} from '../../actions/userActions';
import setAuthToken from "../../utils/setAuthToken";
import VerifyComponent from "../../components/verifyOtp";

const VerifyContainer = props => {
  const [email, setEmail] = useState('');
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  let otp = otp1+otp2+otp3+otp4
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const verifyOTP = useCallback(async () => {
    const params = props.location.search.split('emailId=');
    if(params.length > 1) {
      const emailId = params[1];
      const data = { emailId, otp };
      const result = await verifyOtp(data);
      if (result.status === 200) {
        // Set auth token auth
         const token = result.data.data.token;
         setAuthToken(token);
         // Decode token and get user info and exp
         const decoded = jwt_decode(token);
         // Set user and isAuthenticated
         localStorage.setItem('theLedgerToken', token);
         dispatch(setCurrentUser(decoded));
        props.history.push(`/overview`);
      } else {
        const err = result.data.message;
        setErrorMessage(err);
      }
    }else {
      setErrorMessage('Invalid Url');
    }

  });
  const resendOtp = useCallback(async () => {
    setOtp1('');
    setOtp2('');
    setOtp3('');
    setOtp4('');
    const params = props.location.search.split('emailId=');
    if(params.length > 1) {
      const emailId = params[1];
      const data = { emailId };
      const result = await sendOtp(data);
      if (result.status === 200) {
        const err = result.data.message;
        setErrorMessage(err);
      }else if(result.status === 500) {
        const err = result.data.message.response;
        setErrorMessage(err);
      }else if(result.status === 401) {
        const err = result.data.message;
        setErrorMessage(err);
      } else {
        const err = result.data.data[0];
        setErrorMessage(err.msg);
      }
    }
  });
  return (
    <div className="Homecontainer">
      <div className="bg-image">
        <div className="home">
          <div className="container centered">
            <div className="selectUser centered">
              <div className="loginScreen">
                <div className="container-fluid p-0">
                  <VerifyComponent
                   email={email}
                   otp1={otp1}
                   otp2={otp2}
                   otp3={otp3}
                   otp4={otp4}
                   errorMessage={errorMessage}
                   onEmailChange={e => setEmail(e.target.value)}
                   onOtpChange1={e => setOtp1(e.target.value)}
                   onOtpChange2={e => setOtp2(e.target.value)}
                   onOtpChange3={e => setOtp3(e.target.value)}
                   onOtpChange4={e => setOtp4(e.target.value)}
                   onVerifyOtp={verifyOTP}
                   onResendOtp={resendOtp}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyContainer;
