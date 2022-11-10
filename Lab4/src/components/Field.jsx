import React from 'react';
import validateForm from '../helpers/validateForm';

class Field extends React.Component {
  componentDidMount() {
    this.props.setInputValues(this.props.type, {
      isError: true,
      errorMessage: '',
      value: '',
    });
  }

  handleOnChange = (e) => {
    const errorMessage = validateForm(e);
    if (!errorMessage) {
      this.props.setInputValues(this.props.type, {
        isError: false,
        errorMessage: '',
        value: e.target.value,
      });
      return;
    }
    this.props.setInputValues(this.props.type, {
      isError: true,
      errorMessage,
      value: e.target.value,
    });
  };

  render() {
    const { type, value } = this.props;
    const label = {
      email: 'Email',
      password: 'Password',
    };

    return (
      value && (
        <div className="Field">
          <div className="Field__Label">{label[type]}</div>
          <input
            className="Field__Input"
            onChange={this.handleOnChange}
            type={type}
            value={value.value}
          />
          <div className="Field__HelperMessage">{value.errorMessage}</div>
        </div>
      )
    );
  }
}

export default Field;
