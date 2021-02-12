import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import store from './store';

type propsTypes = {
  location: string;
};

const Layout = ({ location }: propsTypes) => {
  return (
    <StaticRouter location={location}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};

export default Layout;
