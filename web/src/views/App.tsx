import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StyledApp from './App.styles';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './containers/HomePage/HomePage';
import LogInModal from './modals/LogInModal/LogInModal';
import SignUpModal from './modals/SignUpModal/SignUpModal';

const App = () => (
  <StyledApp>
    {/* Sidebar */}
    <Sidebar />

    {/* Content */}
    <div className="content">
      {/* Header */}
      <Header />

      {/* Modals */}
      <SignUpModal />
      <LogInModal />

      {/* Switch */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/manga">Manga</Route>
        <Route path="/user">User</Route>
      </Switch>
    </div>
  </StyledApp>
);

export default App;
