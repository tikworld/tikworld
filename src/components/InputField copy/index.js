import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  fieldName,
  type,
  placeholder,
  aria,
  children,
  pattern,
  required,
  example,
}) => (
  <div className="form-group">
    <label htmlFor={fieldName}>{children}</label>
    <input
      type={type}
      className="form-control"
      id={fieldName}
      placeholder={placeholder}
      aria-describedby={aria}
      pattern={pattern}
      required={required}
    />
    <small>{example}</small>
  </div>
);

InputField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  aria: PropTypes.string.isRequired,
  children: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  example: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  required: false,
  example: '',
};

export default InputField;
