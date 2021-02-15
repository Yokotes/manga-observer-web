import * as React from 'react';
import { Link } from 'react-router-dom';

const MainNavItem = ({
  path,
  classes,
  title,
}: {
  title: string;
  path: string;
  classes: string;
}) => {
  return (
    <Link to={path} title={title} className="menu__link">
      <i className={classes}></i>
      <span>{title}</span>
    </Link>
  );
};

export default MainNavItem;
