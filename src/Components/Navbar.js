import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Logo from '../Assets/Spellbound2.jpg'
import Topbar from './Topbar'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        
         <img src={Logo} alt="this is the Spellbound Farm logo"  />
         
        </Link>

        <Topbar />
      
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fal fa-times' : 'fad fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links '
              onClick={closeMobileMenu}
            >
              Training 
              {/* <i className='fa fa-angle-down' /> */}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/facility'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Our Facility
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Photos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Breeding'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Breeding
            </Link>
          </li>
          <li>
            <Link
              to='/events'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Events
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
