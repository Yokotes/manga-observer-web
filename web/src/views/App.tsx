import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StyledApp from './App.styles';
import Header from './components/Header/Header';
import HomePage from './containers/HomePage/HomePage';

const App = () => (
  <StyledApp>
    {/* Header */}
    <Header />

    {/* Content */}
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </StyledApp>
);

export default App;
