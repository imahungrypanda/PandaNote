import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="splash-container">
    <Link to="/" className="header-logo">
      <img className="panda-logo" src="/assets/panda_logo.png" alt="logo"></img>
      <h1>PandaNode</h1>
    </Link>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
