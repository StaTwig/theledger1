import React from "react";
import logo from "../../assets/ABInBev.png";

const SignUp = (props) => {
  const handleSubmit = () => {
    let values = {
      'firstName': props.firstName,
      'lastName': props.lastName,
      'emailId': props.email,
    }
    props.onSignup(values);
  }
  return (
    <div className="signUpScreen">
      <div className="align-center pb-5 pt-5">
        <h2 className="titleSubHeading">Welcome Back!</h2>
        <span className="titleSubHeading"><span className="titleHeading">Sign Up</span> to continue.</span>
      </div>
        <div className="loginUserBlock justify-content-center">
          <div className="form-group">
            <label htmlFor="firstName" className="userNameLabel mb-1" >First Name</label>
            <input name="firstName" className="form-control username mb-3" value={props.firstName}
              onChange={(e) => { props.onfirstNameChange(e); }} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="userNameLabel mb-1">Last Name</label>
            <input name="lastName" className="form-control username mb-3" value={props.lastName}
              onChange={(e) => { props.onlastNameChange(e); }} />
          </div>
          <div className="form-group">
            <label htmlFor="mobileemail" className="userNameLabel mb-1">Mobile No / Email ID</label>
            <input name="email" className="form-control username mb-3" value={props.email}
              onChange={(e) => { props.onEmailChange(e); }} />
          </div>
          {
            props.errorMessage && <div className="alert alert-danger">{props.errorMessage}</div>
          }
          <div className="form-group">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className={`width100 btn mt-4`}
              type="button"
            >
              GET STARTED
          </button>
            <p className="signUpDesc align-center mt-3 ">Already have an account? <b>Log In</b></p>

          </div>
        </div>
      <div className="col text-center footer-logo">
        <img src={logo} width={60} />
      </div>
    </div>
  );
};

export default SignUp;
