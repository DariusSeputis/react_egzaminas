import styled from 'styled-components';

export const StyledInput = styled.input`
  color: #696969;

  border: 2px solid #d9d9d9;
  border-radius: 4px;

  font-size: 1em;

  margin: 0.2rem 0 0.3rem 0;
  padding: 0.3rem 2rem;

  outline: none;

  ${(props) =>
    !props.validated ? `border: 2px solid red;` : `border: 2px solid green`}
`;
