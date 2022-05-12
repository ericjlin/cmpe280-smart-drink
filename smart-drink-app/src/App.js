import './App.css';
import { SensorView } from './SensorView';
import { Dashboard } from './Dashboard';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/sensor">
            <SensorView />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
