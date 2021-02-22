import * as React from 'react';
import { useDispatch } from 'react-redux';
import { StyledPopUpCloseBtn } from './PopUp.styles';
import { dropMessage } from './PopUpSlice';

type PopUpMessageProps = {
  msg: string;
  type: 'error' | 'warning' | 'message' | string;
  close(): void;
  id: number;
};

const setTimer = (id: number, time: number, dispatch) => {
  setTimeout(() => {
    dispatch(dropMessage(id));
  }, time);
};

const PopUpMessage = ({ msg, type, close, id }: PopUpMessageProps) => {
  const dispatch = useDispatch();

  //
  // @Description: Set timer. When time end PopUp will desappear
  //
  setTimer(id, 5000, dispatch);

  return (
    <div className={`popUp ${type}`}>
      <StyledPopUpCloseBtn onClick={close}>
        <i className="fas fa-times"></i>
      </StyledPopUpCloseBtn>
      {msg}
    </div>
  );
};

export default PopUpMessage;
