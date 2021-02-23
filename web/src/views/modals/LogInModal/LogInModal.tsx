import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { setToken } from '../../components/ProfileLink/ProfileSlice';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import TextInput from '../../components/TextInput/TextInput';
import { RootState } from '../../store';
import Modal from '../Modal/Modal';
import StyledLogInModal from './LogInModal.styles';
import { hideLogIn, setName, setPassword } from './LogInModalSlice';

const LogInModal = () => {
  const logInState = useSelector((state: RootState) => state.modals.logIn);
  const dispatch = useDispatch();

  const submit = async () => {
    const user = {
      username: logInState.name,
      password: logInState.password,
    };

    if (user.username && user.password) {
      return await axios.post('/api/v1/auth/login', user);
    }
  };

  return (
    <Modal isShow={logInState.isShow} close={() => dispatch(hideLogIn())}>
      <StyledLogInModal
        onSubmit={(e) => {
          e.preventDefault();

          //
          // @Description: Send POST request to the server to get access token.
          //  If error show pop up with message, otherwise close modal
          //  and update profile link component
          //
          submit()
            .then((res) => {
              const token = res.data.access_token;

              dispatch(setToken(token));
              dispatch(hideLogIn());
            })
            .catch((err) => {
              dispatch(
                addMessage({
                  message: `Error: ${err.request.message}`,
                  type: 'error',
                }),
              );
            });
        }}
      >
        <Modal.Title>Sign In</Modal.Title>
        <TextInput
          className="login__input"
          placeHolder="Your name..."
          onChange={(e) => dispatch(setName(e.currentTarget.value))}
        />
        <TextInput
          className="login__input"
          placeHolder="Your password..."
          type="password"
          onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
        />
        <PrimaryButton className="login__btn">Sign in</PrimaryButton>
      </StyledLogInModal>
    </Modal>
  );
};

export default LogInModal;
