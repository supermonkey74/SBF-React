
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './Facility.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/pages/Services';
import Facility from './Components/pages/Facility';
import Photos from './Components/pages/Photos';
import ContactUs from './Components/pages/Contact';
import Events from './Components/pages/Events';
import Social from './Components/pages/Social';
import Sales from './Components/pages/Sales';
import Training from './Components/pages/Training';
// import ArenaCards from './Components/Card'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
      </Switch>
    </Router>

    
  );
}

export default App;


