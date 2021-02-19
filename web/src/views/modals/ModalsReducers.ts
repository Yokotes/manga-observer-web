import { combineReducers } from 'redux';
import LogInModalSlice from './LogInModal/LogInModalSlice';
import SignUpModalSlice from './SignUpModal/SignUpModalSlice';

const ModalsReducers = combineReducers({
  signUp: SignUpModalSlice,
  logIn: LogInModalSlice,
});

export default ModalsReducers;
