
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './Facility.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Facility from './pages/Facility';
import Photos from './pages/Photos';
import ContactUs from './pages/Photos-page';
import Events from './pages/Events';

import Social from './pages/Social';
import Breeding from './pages/Breeding';
import Training from './pages/Training';
// import Topbar from './Topbar';
// import ArenaCards from './Card'

function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/facility' component={Facility} />
        <Route path='/social' component={Social} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/events' component={Events} />
        <Route path='/breeding' component={Breeding} />
        <Route path='/photos' component={Photos} />
        <Route path='/training' component={Training} />
      </Switch>
    </Router>

    
  );
}

export default App;


