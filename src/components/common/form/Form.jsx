import React from 'react';
import Input from '../inputs/Input';
import {
  StyledForm,
  StyledLabelInputWrapper,
  StyledSubmitBtn,
} from './Form.style';
import Validation from './Validation';

const Form = () => {
  return (
    <StyledForm>
      <StyledLabelInputWrapper>
        <label htmlFor='fullName'>Name</label>
        <Validation
          render={(setInputValue, onChange, validated) => (
            <Input
              validated={validated}
              setInputValue={setInputValue}
              onChange={onChange}
              type='text'
              id='fullName'
              placeholder='Joy Shaheb'
            />
          )}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <label htmlFor='email'>Email</label>
        <Validation
          render={(setInputValue, onChange, validated) => (
            <Input
              validated={validated}
              setInputValue={setInputValue}
              onChange={onChange}
              type='text'
              id='email'
              placeholder='abc@gmail.com'
            />
          )}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <label htmlFor='password'>Password</label>
        <Validation
          render={(setInputValue, onChange, validated) => (
            <Input
              validated={validated}
              setInputValue={setInputValue}
              onChange={onChange}
              type='password'
              id='password'
              placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            />
          )}
        />
      </StyledLabelInputWrapper>
      <StyledSubmitBtn type='submit' value='Submit' />
    </StyledForm>
  );
};

export default Form;
