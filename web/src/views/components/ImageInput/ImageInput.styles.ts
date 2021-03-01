import styled from 'styled-components';

const StyledImageInput = styled.div`
  max-width: 150px;
  max-height: 150px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

  & > img {
    width: 100%;
    // opacity: 0;
  }

  & > input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export default StyledImageInput;
