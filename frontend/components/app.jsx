import React from 'react';
import Greeting from './greeting/greeting';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="splash-container">
    <header className="splash-header-container">
      <Link to="/" className="header-logo">
        <img className="header-panda-logo"
          src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489603019/panda_logo_fhv0z7.png"
          alt="logo"></img>
        <h1 className="header-site-name">PandaNote</h1>
      </Link>
      <Greeting />
    </header>
    <section className="splash-photo">
      <h1 className="splash-tagline">Remember everything.</h1>
      </section>
    <footer className="splash-footer"></footer>
    { children }
  </div>
);

export default App;
