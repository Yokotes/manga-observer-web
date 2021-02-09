import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => (
  <>
    {/* Header */}
    <Header />

    {/* Content */}
    <Switch>
      <Route path="/" exact>
        <div>HOME</div>
      </Route>
    </Switch>
  </>
);

export default App;
