import * as React from 'react';
import Logo from '../Logo/Logo';
import MainNav from '../MainNav/MainNav';
import MoreBtn from '../MoreBtn/MoreBtn';
import { StyledSidebar } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <StyledSidebar>
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <MainNav />

      {/* MoreBtn */}
      <MoreBtn />
    </StyledSidebar>
  );
};

export default Sidebar;
