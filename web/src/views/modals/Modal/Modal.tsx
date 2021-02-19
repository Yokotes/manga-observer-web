import * as React from 'react';
import {
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

const Modal = ({ children, isShow, close }: ModalProps) => {
  return isShow ? (
    <StyledModal>
      <StyledModalCloseBtn title="Close" onClick={close}>
        <i className="fas fa-times"></i>
      </StyledModalCloseBtn>
      {children}
    </StyledModal>
  ) : null;
};

Modal.Title = ({ children }: ModalTitleProps) => {
  return <StyledModalTitle>{children}</StyledModalTitle>;
};

export default Modal;
