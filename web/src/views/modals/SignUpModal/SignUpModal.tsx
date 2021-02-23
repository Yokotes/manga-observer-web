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
import { setToken } from '../../components/ProfileLink/ProfileSlice';

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
          //  If user already exists, show PopUp with type 'error'
          //  Else show PopUp with 'message' type
          //  After registration new user complete send auth request
          //  to get access token and write it to the state
          //
          submit()
            .then(async (res) => {
              // Add pop up
              dispatch(
                addMessage({
                  message: res.data.message,
                  type: 'message',
                }),
              );

              // Send auth request
              const user = {
                username: signUpState.name,
                password: signUpState.password,
              };

              const auth = await axios.default.post('/api/v1/auth/login', user);

              // Write token to the state and to the local storage, then close modal
              dispatch(setToken(auth.data.access_token));
              dispatch(hideSignUp());
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
