import React from 'react';
import { useEffect } from 'react';
import validateForm from '../helpers/validateForm';

const Field = ({ type, value, setInputValues }) => {
  const label = {
    email: 'Email',
    password: 'Password',
  };

  useEffect(() => {
    setInputValues(type, {
      isError: true,
      errorMessage: '',
      value: '',
    });
  }, []);

  const handleOnChange = (e) => {
    const errorMessage = validateForm(e);
    if (!errorMessage) {
      setInputValues(type, {
        isError: false,
        errorMessage: '',
        value: e.target.value,
      });
      return;
    }
    setInputValues(type, {
      isError: true,
      errorMessage,
      value: e.target.value,
    });
  };

  return (
    value && (
      <div className="Field">
        <div className="Field__Label">{label[type]}</div>
        <input
          className="Field__Input"
          onChange={handleOnChange}
          type={type}
          value={value.value}
        />
        <div className="Field__HelperMessage">{value.errorMessage}</div>
      </div>
    )
  );
};

export default Field;
