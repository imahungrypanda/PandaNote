import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to="/" className="header-logo">
      <h1>PandaNode</h1>
    </Link>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
