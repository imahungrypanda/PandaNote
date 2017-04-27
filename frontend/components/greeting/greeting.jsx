import React from 'react';
import { Link } from 'react-router';

const Greeting = () => (
  <nav className="session-links">
    <Link className="demo-link" to="/login">Demo</Link>
    <Link className="login-link" to="/login">Login</Link>
    <Link className="signup-link" to="/signup">Sign Up</Link>
  </nav>
);

export default Greeting;
