import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '../../components/SubmitButton/index';

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(
    true,
  );
  const [state, setState] = useState({
    loginUserName: '',
    loginPassword: '',
    loginRememberMe: false,
  });

  useEffect(() => {
    const { loginUserName, loginPassword } = state;

    if (loginUserName.length > 0 && loginPassword.length > 0) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  }, [state.loginUserName, state.loginPassword]);

  const resetLogin = () => {
    setLoginError(false);
    setIsLoggingIn(false);
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
        setLoginError(true);
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
                isOpen={loginError}
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

export default Login;
