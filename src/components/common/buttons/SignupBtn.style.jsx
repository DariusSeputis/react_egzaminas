import styled from 'styled-components';

export const StyledSignupBtn = styled.button`
  border-radius: 4px;
  padding: 0.4rem 3rem;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: space-around;

  position: relative;

  ${(props) =>
    props.brand === 'google'
      ? `
      border: 2px solid #d9d9d9;
      background-color: white;
      color: black;
  `
      : `background: #4F70B5;
      border:none;
      color: white;`}
`;
