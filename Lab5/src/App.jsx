import { useState } from 'react';

import Field from './components/Field';
import Button from './components/Button';

/**
 *
 *
 * Create a form with common features like validation and help messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a helper message for validation errors
 * - Disable Login button until the form is valid
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 *
 *
 */

const App = () => {
  const [formValues, setFormValues] = useState({});

  const setInputValues = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const hasError = () => {
    if (!formValues) return true;
    return Object.values(formValues).some((value) => value.isError);
  };
  const hasValues = () => {
    if (!formValues) return false;
    return Object.values(formValues).some((value) => value.value !== '');
  };
  const clearForm = () => {
    if (window.confirm('Clear all form inputs?')) {
      setFormValues(() => {
        const newFormValues = {};
        Object.keys(formValues).forEach((inputKey) => {
          newFormValues[inputKey] = {
            ...formValues[inputKey],
            isError: true,
            value: '',
          };
        });
        return newFormValues;
      });
    }
  };
  const submitForm = () => {
    alert('Successfully logged in.');
  };

  return (
    <div className="App">
      <h1>React Lab 4</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field
          type="email"
          value={formValues.email}
          setInputValues={setInputValues}
        />
        <Field
          type="password"
          value={formValues.password}
          setInputValues={setInputValues}
        />
        <div className="Buttons">
          <Button
            label="Clear"
            handleClick={clearForm}
            isDisabled={!hasValues()}
          />
          <div className="Spacer" />
          <Button
            label="Login"
            handleClick={submitForm}
            isDisabled={hasError()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
