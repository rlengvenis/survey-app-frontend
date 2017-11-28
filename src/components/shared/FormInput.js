import React from 'react';
import classnames from 'classnames'

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

export default FormInput