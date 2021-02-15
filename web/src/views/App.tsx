import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StyledApp from './App.styles';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './containers/HomePage/HomePage';

const App = () => (
  <StyledApp>
    {/* Sidebar */}
    <Sidebar />

    {/* Content */}
    <div className="content">
      {/* Header */}
      <Header />

      {/* Switch */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  </StyledApp>
);

export default App;
