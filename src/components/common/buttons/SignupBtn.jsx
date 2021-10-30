import React from 'react';
import { StyledSignupBtn } from './SignupBtn.style';
import PropTypes from 'prop-types';

const SignupBtn = ({ children, brand, action, icon }) => {
  return (
    <StyledSignupBtn brand={brand} onClick={action}>
      {children}
    </StyledSignupBtn>
  );
};

// Prop types
SignupBtn.propTypes = {
  text: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  action: PropTypes.func,
};
export default SignupBtn;
