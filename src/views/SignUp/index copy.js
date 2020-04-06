import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import CheckBox from '../../components/CheckBox';

const SignUp = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form>
            <h5>Account Information</h5>
            <InputField
              fieldName="inputUserName"
              type="text"
              placeholder="User Name"
              aria="userNameHelpInLine"
            >
              User Name:
            </InputField>
            <InputField
              fieldName="inputPassword"
              type="password"
              placeholder="Password"
              aria="passwordHelpInLine"
            >
              Password:
            </InputField>
            <InputField
              fieldName="inputEmail"
              type="email"
              placeholder="Email"
              aria="emailHelpInLine"
            >
              Email:
            </InputField>

            <h5>Profile Information</h5>
            <InputField
              fieldName="inputFirstName"
              type="text"
              placeholder="First Name"
              aria="firstNameHelpInLine"
            >
              First Name:
            </InputField>
            <InputField
              fieldName="inputLastName"
              type="text"
              placeholder="Last Name"
              aria="lastNameHelpInLine"
            >
              Last Name:
            </InputField>
            <InputField
              fieldName="inputMobilePhone"
              type="text"
              placeholder="Mobile Phone"
              aria="mobilePhoneHelpInLine"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              example="Format: 123-456-7890"
            >
              Mobile Phone:
            </InputField>
            <CheckBox fieldName="termsAgreementCheckbox">
              I agree to the Terms and Conditions
            </CheckBox>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
            <div className="form-group">
              <span className="pr-2">Already have a user?</span>
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
