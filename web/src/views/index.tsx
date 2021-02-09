import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

type propsTypes = {
  location: string;
};

const Layout = ({ location }: propsTypes) => {
  return (
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
};

export default Layout;
