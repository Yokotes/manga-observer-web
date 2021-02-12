import * as React from 'react';
import Logo from '../Logo/Logo';
import MainNav from '../MainNav/MainNav';
import MoreBtn from '../MoreBtn/MoreBtn';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <MainNav />

      {/* MoreBtn */}
      <MoreBtn />
    </StyledHeader>
  );
};

export default Header;
