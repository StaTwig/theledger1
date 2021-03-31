import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DropdownButton from '../../shared/dropdownButtonGroup';
import { getOrganisations } from '../../actions/productActions';
import { Formik } from "formik";
import logo from "../../assets/ABInBev.png";

const FormPage = (props) => {
  const [organisations, setOrganisations] = useState([]);
  const [organisationsArr, setOrganisationsArr] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      const orgs = await getOrganisations();
      // const orgIds = orgs.map(org => org.id);
      // setOrganisations(orgIds);
      orgs.push({ id: 'Other', name: 'Other' });
      setOrganisations(orgs);
      setOrganisationsArr(orgs);
    }
    fetchData();
  }, []);

  const changeFn = (value, e) => {
    setValue(value);
    let orgs = organisationsArr.filter(org => org.name.toLowerCase().includes(value.toLowerCase()));
    // orgs.push({ id: 0, name: 'Other' });
    setOrganisations(orgs);
    if (organisationsArr.filter(org => org.name.toLowerCase() == value.toLowerCase()).length && value != 'Other')
      props.onOrgChange(false);
    else {
      props.onOrgChange(true);
      if (e) {
        setValue('Other');
      }
    }

    props.onOrganisationChange({ id: 0, name: value });
  }
  return (
    <div className="signUpScreen">
      <div className="align-center pb-5 pt-5">
        <h2 className="titleSubHeading">Welcome Back!</h2>
        <span className="titleSubHeading"><span className="titleHeading">Sign Up</span> to continue.</span>
      </div>
      <div className="loginUserBlock justify-content-center">
        {props.adminAwaiting ?
          <>
            <div class="font-weight-bold align-self-center text-center ml-2 mr-2 mb-5 approve">Request is pending and you will receive an email/sms after approval</div></>

          :
          <Formik
            enableReinitialize={true}
            initialValues={{
              firstName: "",
              lastName: "",
              email: '',
              org: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = "Required";
              }
              if (!values.lastName) {
                errors.lastName = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              }
              if (!values.org) {
                errors.org = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              props.onSignup(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              dirty,
            }) => (
              <form onSubmit={handleSubmit} className="mb-3">
                <div className="login-form mt-3 pl-5 pr-5">
                  <div className="card-title">Signup</div>
                  <div className="form-group flex-column">
                    <input type="text"
                      className="form-control"
                      name="firstName"
                      value={props.firstName}
                      onChange={(e) => { props.onfirstNameChange(e); handleChange(e); }}
                      placeholder="First Name" />
                    {errors.firstName && touched.firstName && (
                      <span className="error-msg text-danger">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group flex-column">
                    <input type="text"
                      className="form-control"
                      name="lastName"
                      value={props.lastName}
                      onChange={(e) => { props.onlastNameChange(e); handleChange(e); }}
                      placeholder="Last Name" />
                    {errors.lastName && touched.lastName && (
                      <span className="error-msg text-danger">{errors.lastName}</span>
                    )}
                  </div>
                  <div className="form-group flex-column">
                    <input type="email"
                      className="form-control"
                      name="email"
                      value={props.email}
                      onChange={(e) => { props.onEmailChange(e); handleChange(e); }}
                      placeholder="Email ID/Mobile Number" />
                    {errors.email && touched.email && (
                      <span className="error-msg text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group flex-column">
                    <div className="w-100">
                      <DropdownButton
                        name={props.organisation.organisationId}
                        value={value}
                        isText={true}
                        // placeholder='Select organisation/type new'
                        placeholder='Organisation'
                        onSelect={item => {
                          setFieldValue('org', item.name);
                          props.onOrganisationChange(item);
                          let orgs = organisationsArr.filter(org => org.name.toLowerCase() == item.name.toLowerCase());
                          if (orgs.length && item.name != 'Other')
                            props.onOrgChange(false);
                          else
                            props.onOrgChange(true);
                          setValue(item.name);
                        }}
                        groups={organisations}
                        changeFn={(v, e = '') => {
                          console.log(v);
                          setFieldValue('org', v); changeFn(v, e);
                        }}
                        dClass="ml-4"
                        className="text"
                      />
                      {errors.org && touched.org && (
                        <span className="error-msg text-danger">{errors.org}</span>
                      )}
                    </div>
                  </div>
                  {
                    props.errorMessage && <div className="alert alert-danger">{props.errorMessage}</div>
                  }
                  <div className="text-center mt-2">
                    <button type="submit" className="btn btn-primary" >
                      SIGNUP
                  </button>
                  </div>
                  <div className="signup-link text-center mt-2">
                    Already have an Account? <Link to="/login">Login</Link>
                  </div>
                </div></form>
            )}
          </Formik>
        }
         <div className="col text-center footer-logo">
        <img src={logo} width={60} />
      </div>
      </div>
    </div>
  );
};

export default FormPage;



