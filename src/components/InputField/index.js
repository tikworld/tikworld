import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type,
  className,
  id,
  value,
  onChange,
  placeholder,
  aria,
  pattern,
  required,
  children,
  example,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{children}</label>
    <input
      type={type}
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-describedby={aria}
      pattern={pattern}
      required={required}
    />
    <small>{example}</small>
  </div>
);

InputField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  aria: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.string,
  example: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  required: false,
  example: '',
};

export default InputField;
