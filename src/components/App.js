import { Grid } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Deposit from './deposit';
import Login from './login';

const App = () => (
    
      <Router>
        <Switch>
          <Route path='/deposit'>
            <Deposit/>
          </Route>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
    
)

export default App;
