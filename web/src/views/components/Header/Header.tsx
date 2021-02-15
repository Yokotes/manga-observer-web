import * as React from 'react';
import AuthView from '../AuthView/AuthView';
import Search from '../Search/Search';
import StyledHeader from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      {/* Search form */}
      <Search />

      {/* Auth view */}
      <AuthView />
    </StyledHeader>
  );
};

export default Header;
