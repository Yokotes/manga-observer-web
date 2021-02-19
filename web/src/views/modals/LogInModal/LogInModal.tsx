import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/views/store';

const LogInModal = () => {
  const logInState = useSelector((state: RootState) => state.modals.logIn);

  return logInState.isShow ? <div>KEK</div> : null;
};

export default LogInModal;
