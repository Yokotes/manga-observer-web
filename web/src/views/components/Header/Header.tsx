import * as React from 'react';
import ProfileLink from '../ProfileLink/ProfileLink';
import Search from '../Search/Search';
import StyledHeader from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      {/* Search form */}
      <Search />

      {/* Auth view */}
      <ProfileLink />
    </StyledHeader>
  );
};

export default Header;
