import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className="splash-container">
      <Link to="/" className="header-logo">
        <img className="header-panda-logo" src="/assets/panda_logo.png" alt="logo"></img>
        <h1 className="header-site-name">PandaNote</h1>
      </Link>
      <GreetingContainer />
      { children }
    </header>
    <content></content>
    <footer></footer>
  </div>
);

export default App;
