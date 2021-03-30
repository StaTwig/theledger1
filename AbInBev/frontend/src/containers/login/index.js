import React, { useState, useCallback } from "react";
import { sendOtp, validateUser } from '../../actions/userActions';
import LoginComponent from '../../components/login';

const Login = (props) => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const onSendOtp = useCallback(async () => {
    const data = { emailId:mobileNumber };
    const result = await sendOtp(data);
    if (result.status === 200) {
      props.history.push(`/verify?emailId=${mobileNumber}`);
    }else if(result.status === 500) {
        const err = result.data.message;
        setErrorMessage(err);
    }else if(result.status === 401) {
      const err = result.data.message;
      setErrorMessage(err);
    } else {
      const err = result.data.data[0];
      setErrorMessage(err.msg);
    }
  });

  return (
    <div className="Homecontainer">
      <div className="bg-image">
        <div className="home">
          <div className="container centered">
            <div className="selectUser centered">
              <div className="loginScreen">
                <LoginComponent
                  errorMessage={errorMessage}
                  onSendOtp={onSendOtp}
                  onMobileChange={e => setMobileNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
