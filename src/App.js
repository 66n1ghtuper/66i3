import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import PulseLine from './PulseLine';

import './App.css';

const App = () => {
  return (
    <Router>
     
        <Header />
        <PulseLine />
    </Router>
  );
};

export default App;