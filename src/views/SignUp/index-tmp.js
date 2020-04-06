import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/SubmitButton/index';
import CheckBox from '../../components/CheckBox';

const SignUp = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [
    isSignUpButtonDisabled,
    setIsSignUpButtonDisabled,
  ] = useState(true);

  const [state, setState] = useState({
    signUpEmail: '',
    signUpPassword: '',
    signUpTermsAgreement: false,
  });

  useEffect(() => {
    const { signUpEmail, signUpPassword } = state;

    if (signUpEmail.length > 0 && signUpPassword.length > 0) {
      setIsSignUpButtonDisabled(false);
    } else {
      setIsSignUpButtonDisabled(true);
    }
  }, [state.loginUserName, state.loginPassword]);

  const resetLogin = () => {
    setSignUpError(false);
    setIsSigningUp(false);
  };

  const handleChange = e => {
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

    setIsLoggingIn(true);

    fetch(
      `https://api.appreactor.ga/login?username=${state.loginUserName}&password=${state.loginPassword}`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resetLogin();
      })
      .catch(error => {
        setSignUpError(true);
        setIsLoggingIn(false);
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="ml-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="loginUserName">User name</label>
              <input
                onChange={handleChange}
                value={state.loginUserName}
                type="text"
                id="loginUserName"
                className="form-control mt-n1"
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                onChange={handleChange}
                value={state.loginPassword}
                type="password"
                id="loginPassword"
                className="form-control mt-n1"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="checkbox"
                checked={state.loginRememberMe}
                id="loginRememberMe"
              />
              <label
                className="form-check-label"
                htmlFor="loginRememberMe"
              >
                Remember Me
              </label>
            </div>
            <div className="form-group">
              {!isLoggingIn ? (
                <Button disabled={isLoginButtonDisabled}>
                  LOGIN
                </Button>
              ) : (
                <Button
                  className="btn btn-lg btn-primary btn-block disabled"
                  disabled={isLoginButtonDisabled}
                >
                  <span
                    className="mr-2 mb-1 spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Logging In...
                </Button>
              )}
            </div>
            <div className="form-group pt-3">
              <span className="pr-2">Not signed up yet?</span>
              <Link to="/signup">Sign up</Link>
            </div>
            <div className="form-group">
              <Alert
                color="danger"
                isOpen={signUpError}
                toggle={resetLogin}
              >
                User login or password incorrect
              </Alert>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-sm-6">
//           <form>
//             <h5>Account Information</h5>

//             <InputField
//               fieldName="inputEmail"
//               type="email"
//               placeholder="Email"
//               aria="emailHelpInLine"
//             >
//               Email:
//             </InputField>

//             <InputField
//               fieldName="inputPassword"
//               type="password"
//               placeholder="Password"
//               aria="passwordHelpInLine"
//             >
//               Password:
//             </InputField>

//             <CheckBox fieldName="termsAgreementCheckbox">
//               I agree to the Terms and Conditions
//             </CheckBox>
//             <div className="form-group">
//               <button type="submit" className="btn btn-primary">
//                 Sign up
//               </button>
//             </div>
//             <div className="form-group">
//               <span className="pr-2">Already have a user?</span>
//               <Link to="/login">Sign In</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
