import React, { useState } from 'react';
import { useField } from 'formik';

const Input = ({ name, label, type = 'text' }) => {
  const [inputType, setInputType] = useState(type);
  const [{ onChange, value, onBlur }, { touched, error }] = useField(name);

  return (
    <label>
      {label}
      <input
        checked={value}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type={inputType}
        name={name}
      />
      {type === 'password' && (
        <button
          onClick={() => {
            setInputType((prevState) => {
              return prevState === 'password' ? 'text' : 'password';
            });
          }}
          type="button"
          className="eye"
        >
          👁
        </button>
      )}
      {touched && error && <p className="message">{error}</p>}
    </label>
  );
};

export default Input;
