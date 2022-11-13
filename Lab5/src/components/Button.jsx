import React from 'react';

const Button = ({ isDisabled, handleClick, label }) => {
  return (
    <button
      className={`Button ${isDisabled ? 'isDisabled' : ''}`}
      onClick={handleClick}
    >
      <div className="Button__Label">{label}</div>
    </button>
  );
};

export default Button;
