import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import ReactGA from 'react-ga'
import React, {useEffect} from 'react';




function App() {

  useEffect (() => {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
