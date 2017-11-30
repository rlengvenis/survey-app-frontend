import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const FormInput = ({meta, type, input, placeholder}) => {
  const inputSyle = classnames('input', {
    'input__has-error': meta.touched && meta.error
  });

  return (
    <div>
      <input
        className={inputSyle}
        type={type}
        placeholder={placeholder}
        {...input}
      />
      <div className="input--error-message">
        {
          meta.touched && meta.error &&
          <span>{`Error: ${meta.error}`}</span>
        }
      </div>
    </div>
  )
};

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default FormInput;