import ProfilePage from './containers/ProfilePage/ProfilePage';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StyledApp from './App.styles';
import Header from './components/Header/Header';
import PopUpContainer from './components/PopUp/PopUpContainer';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './containers/HomePage/HomePage';
import LogInModal from './modals/LogInModal/LogInModal';
import SignUpModal from './modals/SignUpModal/SignUpModal';
import CatalogPage from './containers/CatalogPage/CatalogPage';
import MangaInfoPage from './containers/MangaInfoPage/MangaInfoPage';

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

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/manga">
          <MangaInfoPage />
        </Route>
      </Switch>

      {/* PopUps */}
      <PopUpContainer />
    </div>
  </StyledApp>
);

export default App;
