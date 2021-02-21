import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './App';

type propsTypes = {
  location: string;
  store: any;
};

const Layout = ({ location, store }: propsTypes) => {
  return (
    <StaticRouter location={location}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};

export default Layout;
