import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '../../components/SubmitButton/index';
import CheckBox from '../../components/CheckBox';
import InputField from '../../components/InputField';

const Login = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [
    isSignUpButtonDisabled,
    setIsSignUpButtonDisabled,
  ] = useState(true);
  const [state, setState] = useState({
    signUpEmail: '',
    signUpPassword: '',
    termsAndConditions: false,
  });

  useEffect(() => {
    const { signUpEmail, signUpPassword } = state;

    if (signUpEmail.length > 0 && signUpPassword.length > 0) {
      setIsSignUpButtonDisabled(false);
    } else {
      setIsSignUpButtonDisabled(true);
    }
  }, [state.signUpEmail, state.signUpPassword]);

  const resetSignUp = () => {
    setSignUpError(false);
    setIsSigningUp(false);
  };

  const handleChange = e => {
    console.log(`in handle change ${e.target.type}`);

    setState({
      ...state,
      [e.target.id]:
        e.target.type !== 'checkbox'
          ? e.target.value
          : e.target.checked,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsSigningUp(true);

    fetch(
      `https://api.appreactor.ga/login?username=${state.loginUserName}&password=${state.loginPassword}`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resetSignUp();
      })
      .catch(error => {
        setSignUpError(true);
        setIsSigningUp(false);
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="ml-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <InputField
                type="text"
                className="form-control mt-n1"
                id="signUpEmail"
                onChange={handleChange}
                value={state.signUpEmail}
                placeholder="Email"
                required
              >
                Email
              </InputField>
            </div>

            <div className="form-group">
              <InputField
                type="password"
                className="form-control mt-n1"
                id="signUpPassword"
                onChange={handleChange}
                value={state.signUpPassword}
                placeholder="Password"
                required
              >
                Password
              </InputField>
            </div>

            <CheckBox
              fieldName="termsAgreementCheckbox"
              onChange={handleChange}
              checked={state.termsAndConditions}
            >
              I agree to the Terms and Conditions
            </CheckBox>

            <div className="form-group">
              {!isSigningUp ? (
                <Button disabled={isSignUpButtonDisabled}>
                  SIGN UP
                </Button>
              ) : (
                <Button
                  className="btn btn-lg btn-primary btn-block disabled"
                  disabled={isSignUpButtonDisabled}
                  spinner="true"
                >
                  {/* <span
                    className="mr-2 mb-1 spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  /> */}
                  Signing Up...
                </Button>
              )}
            </div>

            <div className="form-group pt-3">
              <span className="pr-2">Not signed up yet?</span>
              <Link to="/login">Login</Link>
            </div>
            <div className="form-group">
              <Alert
                color="danger"
                isOpen={signUpError}
                toggle={resetSignUp}
              >
                Email or password is incorrect
              </Alert>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
