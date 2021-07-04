import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button2() {
  return (
    <Link to='events'>
      <button className='btn'><h1>Horse Show information</h1></button>
    </Link>
  );
}


