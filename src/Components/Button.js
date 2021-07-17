import React from 'react';
import '../Styles/css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='events'>
      <button className='btn'>Events</button>
    </Link>
  );
}


