import { Component } from 'react';

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

class App extends Component {
  state = {
    formValues: {},
  };
  setInputValues = (field, value) => {
    this.setState((state) => {
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [field]: value,
        },
      };
    });
  };
  hasError = () => {
    if (!this.state.formValues) return true;
    return Object.values(this.state.formValues).some((value) => value.isError);
  };
  hasValues = () => {
    if (!this.state.formValues) return false;
    return Object.values(this.state.formValues).some(
      (value) => value.value !== ''
    );
  };
  clearForm = () => {
    if (window.confirm('Clear all form inputs?')) {
      this.setState((state) => {
        const newFormValues = {};
        Object.keys(state.formValues).forEach((inputKey) => {
          newFormValues[inputKey] = {
            ...state.formValues[inputKey],
            isError: true,
            value: '',
          };
        });
        return {
          ...state,
          formValues: newFormValues,
        };
      });
    }
  };
  submitForm = () => {
    alert('Successfully logged in.');
  };

  render() {
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Login</h1>
        <div className="Container">
          <Field
            type="email"
            value={this.state.formValues.email}
            setInputValues={this.setInputValues}
          />
          <Field
            type="password"
            value={this.state.formValues.password}
            setInputValues={this.setInputValues}
          />
          <div className="Buttons">
            <Button
              label="Clear"
              handleClick={this.clearForm}
              isDisabled={!this.hasValues()}
            />
            <div className="Spacer" />
            <Button
              label="Login"
              handleClick={this.submitForm}
              isDisabled={this.hasError()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
