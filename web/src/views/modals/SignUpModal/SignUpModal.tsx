import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../components/TextInput/TextInput';
import { RootState } from 'src/views/store';
import StyledSignUp from './SignUpModal.styles';
import Modal from '../Modal/Modal';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { hideSignUp } from './SignUpModalSlice';

const SignUpModal = () => {
  const signUpState = useSelector((state: RootState) => state.modals.signUp);
  const dispatch = useDispatch();

  return (
    <Modal isShow={signUpState.isShow} close={() => dispatch(hideSignUp())}>
      <StyledSignUp>
        {/* Title */}
        <Modal.Title>Welcome to Manga Observer!</Modal.Title>

        {/* Name input */}
        <TextInput className="signup__input" placeHolder="Your name..." />

        {/* Password input */}
        <TextInput
          className="signup__input"
          type="password"
          placeHolder="Your password..."
        />

        {/* Submit button */}
        <PrimaryButton className="signup__btn">
          Create new account
        </PrimaryButton>
      </StyledSignUp>
    </Modal>
  );
};

export default SignUpModal;
