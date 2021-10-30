import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { BiFontSize, BiLock } from 'react-icons/bi';
import { MdOutlineFacebook } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import SignupBtn from '../common/buttons/SignupBtn';
import Form from '../common/form/Form';
import Modal from '../Modal/Modal';
import {
  StyledOr,
  StyledRegistrationForm,
  StyledRegistrationFormLeft,
  StyledRegistrationFormLeftImg,
  StyledRegistrationFormLeftLogo,
  StyledRegistrationFormRight,
  StyledRegistrationFormRightTop,
  StyledRegistrationFormRightTopBtnWrap,
  StyledRegistrationFormRightTopTextWrap,
} from './RegistrationForm.style';

const RegistrationForm = () => {
  // Hooks
  // -- state
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <StyledRegistrationForm>
      <StyledRegistrationFormLeft>
        <StyledRegistrationFormLeftLogo
          src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
          alt='logoB'
        ></StyledRegistrationFormLeftLogo>
        <StyledRegistrationFormLeftImg
          src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
          alt='guy with phone'
        />
        <span>Start for free & Get Attractive offers Today !</span>
      </StyledRegistrationFormLeft>
      <StyledRegistrationFormRight>
        <StyledRegistrationFormRightTop>
          <h3>Get Started</h3>
          <StyledRegistrationFormRightTopTextWrap>
            <span>Already have an account?</span>
            <a href='#'>Log in</a>
          </StyledRegistrationFormRightTopTextWrap>
          <StyledRegistrationFormRightTopBtnWrap>
            <SignupBtn icon={FcGoogle} brand='google' action={openModal}>
              <FcGoogle
                style={{
                  position: 'absolute',
                  left: '25px',
                  top: '5px',
                  fontSize: '1.5em',
                }}
              />
              <span>sign up</span>
            </SignupBtn>
            <SignupBtn
              icon={MdOutlineFacebook}
              brand='facebook'
              action={openModal}
            >
              <MdOutlineFacebook
                style={{
                  position: 'absolute',
                  left: '25px',
                  top: '5px',
                  fontSize: '1.5em',
                }}
              />
              <span>sign up</span>
            </SignupBtn>
          </StyledRegistrationFormRightTopBtnWrap>
          <StyledOr>Or</StyledOr>
        </StyledRegistrationFormRightTop>
        <Form />
      </StyledRegistrationFormRight>
      {isOpen && (
        <Modal onClose={closeModal}>
          <Form />
        </Modal>
      )}
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
