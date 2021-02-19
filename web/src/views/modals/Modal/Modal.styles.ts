import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

const StyledModalTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin: 0 10px;
  margin-bottom: 80px;
  padding: 0 20px;
`;

const StyledModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export { StyledModal, StyledModalTitle, StyledModalCloseBtn };
