import logo from './logo.svg';
import './App.css';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Row, Col, Container, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Layout from "./Layout.jsx";
import Amplify from 'aws-amplify';
import { SensorView } from './SensorView';
import { SensorCard } from './SensorCard';
import { Dashboard } from './Dashboard';
// import {fetchData} from './AwsFunctions';
import React, { useEffect, useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Navbar from './Navbar.jsx';

function App() {
  useEffect(() => {
    // fetchDataFormDynamoDb();
  });

  // let history = createBrowserHistory();

  return (
      // <Router forceRefresh={true} history={history}>
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
