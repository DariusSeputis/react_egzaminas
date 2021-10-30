import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

export const StyledLabelInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-top: 0.3rem;
  }
`;

export const StyledSubmitBtn = styled.input`
  background-color: #f2877d;
  border: none;
  border-radius: 4px;

  font-size: 1em;

  margin: 1rem 0;

  color: white;

  padding: 0.4rem 0;
  &:hover {
    cursor: pointer;
  }
`;
