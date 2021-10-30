import React from 'react';
import { StyledInput } from './Input.styled';

const Input = ({ type, placeholder, setInputValue, inputValue, validated }) => {
  return (
    <StyledInput
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      type={type}
      placeholder={placeholder}
      validated={validated}
    />
  );
};

export default Input;
