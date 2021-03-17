import { addMessage } from '../components/PopUp/PopUpSlice';

const showMessagePopup = (message: string) =>
  addMessage({
    message,
    type: 'message',
  });

const showWarningPopup = (warningMessage: string) =>
  addMessage({
    message: 'Warning: ' + warningMessage,
    type: 'warning',
  });

const showErrorPopup = (errorMessage: string) =>
  addMessage({
    message: 'Error: ' + errorMessage,
    type: 'error',
  });

export { showErrorPopup, showMessagePopup, showWarningPopup };
