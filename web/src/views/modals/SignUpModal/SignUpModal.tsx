import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../components/TextInput/TextInput';
import { RootState } from 'src/views/store';
import StyledSignUp from './SignUpModal.styles';
import Modal from '../Modal/Modal';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { hideSignUp, setName, setPassword } from './SignUpModalSlice';
import * as axios from 'axios';
import { addMessage } from '../../components/PopUp/PopUpSlice';

const SignUpModal = () => {
  const signUpState = useSelector((state: RootState) => state.modals.signUp);
  const dispatch = useDispatch();

  const submit = async () => {
    const user = {
      name: signUpState.name,
      password: signUpState.password,
    };

    if (user.name && user.password) {
      return await axios.default.post('/api/v1/users', user);
    }
  };

  return (
    <Modal isShow={signUpState.isShow} close={() => dispatch(hideSignUp())}>
      <StyledSignUp
        onSubmit={async (e) => {
          e.preventDefault();

          //
          // @Description: Send POST request to server to add new user
          // If user already exists, show PopUp with type 'error'
          // Else show PopUp with 'message' type
          //
          submit()
            .then((res) => {
              dispatch(
                addMessage({
                  message: res.data.message,
                  type: 'message',
                }),
              );
            })
            .catch((error) => {
              const res = error.response;

              dispatch(
                addMessage({
                  message: 'Error: ' + res.data.message,
                  type: 'error',
                }),
              );
            });
        }}
      >
        {/* Title */}
        <Modal.Title>Welcome to Manga Observer</Modal.Title>

        {/* Name input */}
        <TextInput
          className="signup__input"
          placeHolder="Your name..."
          onChange={(e) => dispatch(setName(e.currentTarget.value))}
        />

        {/* Password input */}
        <TextInput
          className="signup__input"
          type="password"
          placeHolder="Your password..."
          onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
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
