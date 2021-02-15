import * as React from 'react';
import { Link } from 'react-router-dom';
import StyledLogo from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/" title="Manga Observer">
        <img src="/logo.svg" alt="Logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
