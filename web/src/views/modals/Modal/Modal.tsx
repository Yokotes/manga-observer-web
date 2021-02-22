import * as React from 'react';
import {
  BlackScreen,
  StyledModal,
  StyledModalCloseBtn,
  StyledModalTitle,
} from './Modal.styles';

type ModalProps = {
  children: React.ReactChild;
  isShow: boolean;
  close(): void;
};

type ModalTitleProps = {
  children: React.ReactChild;
};

//
// @Change: Decide to make one black screen for all modals or
// leave it as it is
//
const Modal = ({ children, isShow, close }: ModalProps) => {
  return isShow ? (
    <>
      <StyledModal>
        <StyledModalCloseBtn title="Close" onClick={close}>
          <i className="fas fa-times"></i>
        </StyledModalCloseBtn>
        {children}
      </StyledModal>
      <BlackScreen onClick={close} />
    </>
  ) : null;
};

Modal.Title = ({ children }: ModalTitleProps) => {
  return <StyledModalTitle>{children}</StyledModalTitle>;
};

export default Modal;
