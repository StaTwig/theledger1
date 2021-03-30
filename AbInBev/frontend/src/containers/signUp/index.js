import React, { useState, useCallback } from 'react';
import Signup from '../../components/signUp';
import { registerUser, checkUser } from '../../actions/userActions';

const SignupContainer = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organisation, setOrganisation] = useState({ id: '', name: '' });
  const [isNewOrg, setIsNewOrg] = useState(false);

  const onSignup = useCallback(async (values) => {
    let data = { firstName, lastName, emailId: email, organisationId: organisation.id };
    if (isNewOrg) {
      // data.organisationName = organisation.name;
      data.organisationName = values.name;
      data.address = {
        line1: values.line1,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
        country: values.country
      }
      // data.type = 'CUSTOMER_SUPPLIER';
      data.organisationId = 0;
    }

    const result = await registerUser(data);
    if (result.status === 200) {
      setShowModal(false);
    } else if (result.status === 500) {
      setErrorMessage(result.data.message);
    }
    else {
      const err = result.data.data[0];
      setErrorMessage(err.msg);
    }
  });

  const checkNcontinue = async () => {
    if (isNewOrg) {
      let data = { firstName, lastName, emailId: email, organisationId: organisation.id };
      const result = await checkUser(data);
      if (result.status === 200) {
        setShowModal(true);
      } else if (result.status === 500) {
        setErrorMessage(result.data.message);
      }
      else {
        const err = result.data.data[0];
        setErrorMessage(err.msg);
      }
    }
    else
      onSignup({});
  }

  return (
    <div className="Homecontainer">
      <div className="bg-image">
        <div className="home">
          <div className="container centered">
            <div className="selectUser centered">
              <div className="loginScreen">
                <Signup
                  email={email}
                  firstName={firstName}
                  lastName={lastName}
                  onSignup={checkNcontinue}
                  onfirstNameChange={e => setFirstName(e.target.value)}
                  errorMessage={errorMessage}
                  onEmailChange={e => setEmail(e.target.value)}
                  onOrgChange={value => setIsNewOrg(value)}
                  onPasswordChange={e => setPassword(e.target.value)}
                  onlastNameChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
