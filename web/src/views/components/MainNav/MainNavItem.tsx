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
    <Link to={path} title={title}>
      <i className={classes}></i>
    </Link>
  );
};

export default MainNavItem;
