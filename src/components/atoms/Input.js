import React from 'react';

function Input({ id, name, value, onChange, required, pattern }) {
  return (
    <input
      type="tel"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      pattern={pattern}
    />
  );
}

export default Input;
