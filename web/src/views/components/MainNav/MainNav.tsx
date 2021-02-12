import { useSelector } from 'react-redux';
import * as React from 'react';
import StyledNav from './MainNav.styles';
import MainNavItem from './MainNavItem';
import { RootState } from 'src/views/store';

const MainNav = () => {
  const items = useSelector((state: RootState) => state.mainNav.items);

  return (
    <StyledNav>
      {items.map((item) => (
        <MainNavItem
          path={item.path}
          classes={item.classes}
          title={item.title}
          key={item.id}
        />
      ))}
    </StyledNav>
  );
};

export default MainNav;
