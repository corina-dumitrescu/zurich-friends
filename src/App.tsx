import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { PersonContainer } from './person/person-container';

export const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Route path="/">
        <PersonContainer />
      </Route>
    </Router>
  );
}
