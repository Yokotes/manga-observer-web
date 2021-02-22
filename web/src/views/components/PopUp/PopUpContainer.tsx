import PopUpMessage from './PopUpMessage';
import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPopUpContainer } from './PopUp.styles';
import { dropMessage } from './PopUpSlice';

const PopUpContainer = () => {
  const messages = useSelector((state: RootState) => state.popUp.messages);
  const dispatch = useDispatch();

  return (
    <StyledPopUpContainer>
      {messages.map((msg) => (
        <PopUpMessage
          key={msg.id}
          id={msg.id}
          msg={msg.message}
          type={msg.type}
          close={() => dispatch(dropMessage(msg.id))}
        />
      ))}
    </StyledPopUpContainer>
  );
};

export default PopUpContainer;
