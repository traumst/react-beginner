import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = (props) => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>{props.user ? <Link to='/' onClick={props.onSignOut}>Log Out</Link> : <Link to='/Login'>Log In</Link>}</li>
      </ul>
    </nav>
  </header>
);

export default Navigation