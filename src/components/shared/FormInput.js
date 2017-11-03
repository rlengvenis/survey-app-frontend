import React from 'react';

const FormInput = (field) => {
  return (
    <div>
      <input type={field.type} {...field.input} />
      {field.meta.touched && <span>{field.meta.error}</span>}
    </div>
  )
};

export default FormInput