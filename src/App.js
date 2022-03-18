import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import React, {useEffect} from 'react';

function App() {


  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
