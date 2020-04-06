import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ fieldName, onChange, checked, children }) => (
  <div className="form-group">
    <div className="form-check">
      <input
        type="checkbox"
        id={fieldName}
        className="form-check-input"
        onChange={onChange}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={fieldName}>
        {children}
      </label>
    </div>
  </div>
);

CheckBox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default CheckBox;

// {
/* <div className="form-group form-check form-check-inline">
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
</div> */
// }
