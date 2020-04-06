import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ className, disabled, spinner, children }) => (
  <button className={className} disabled={disabled} type="submit">
    {!spinner ? (
      <span />
    ) : (
      <span
        className="mr-2 mb-1 spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />
    )}
    {children}
  </button>
);

SubmitButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.func,
  children: PropTypes.node,
};

SubmitButton.defaultProps = {
  className: 'btn btn-lg btn-primary btn-block',
  disabled: false,
};

export default SubmitButton;
