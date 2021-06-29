
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './Facility.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/pages/Services';
import Facility from './Components/pages/Facility';
import Photos from './Components/pages/Photos';
import ContactUs from './Components/pages/Photos-page';
import Events from './Components/pages/Events';
import Social from './Components/pages/Social';
import Sales from './Components/pages/Sales';
import Training from './Components/pages/Training';
// import Topbar from './Components/Topbar';
// import ArenaCards from './Components/Card'

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
        <Route path='/sales' component={Sales} />
        <Route path='/photos' component={Photos} />
        <Route path='/training' component={Training} />
      </Switch>
    </Router>

    
  );
}

export default App;


