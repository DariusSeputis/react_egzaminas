import styled from 'styled-components';

export const StyledRegistrationForm = styled.div`
  border: 2px solid #c3696a;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  max-width: 50rem;
  margin: 5rem auto;

  overflow: hidden;
`;

export const StyledRegistrationFormLeft = styled.div`
  background-color: #f2877d;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  padding: 1rem 2rem;
  span {
    color: white;
    margin: 1rem auto 0 auto;
    text-align: center;
    width: 60%;
  }
`;

export const StyledRegistrationFormLeftLogo = styled.img`
  width: 40%;
`;
export const StyledRegistrationFormLeftImg = styled.img`
  size: 100%;
`;

// RIGHT
export const StyledRegistrationFormRight = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  padding: 1rem 3rem;
`;

export const StyledRegistrationFormRightTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2rem;
  h3 {
    font-size: 1.7em;
    font-weight: 600;
  }
`;

export const StyledRegistrationFormRightTopTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  span {
  }
  a {
    color: #f2877d;
    text-decoration: none;
  }
`;
export const StyledRegistrationFormRightTopBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledOr = styled.span`
  font-size: 1.5em;
  font-weight: 400;

  margin: 0 auto;
`;
