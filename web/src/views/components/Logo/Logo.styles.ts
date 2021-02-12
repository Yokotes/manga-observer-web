import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 50px;

  & > a {
    display: block;
    padding: 30px 0;
    padding-bottom: 40px;
    border-bottom: 1px solid #fff3;
  }

  & img {
    width: 100%;
  }
`;

export default StyledLogo;
