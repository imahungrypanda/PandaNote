import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className="splash-container">
      <Link to="/" className="header-logo">
        <img className="header-panda-logo"
          src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489603019/panda_logo_fhv0z7.png"
          alt="logo"></img>
        <h1 className="header-site-name">PandaNote</h1>
      </Link>
      <GreetingContainer />
    </header>
    <section>
      <img className="splash-photo"
        src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_40/v1489603020/splash_photo_edza7r.jpg"
        alt="splash_photo"></img>
    </section>
    <footer className="splash-footer"></footer>
    { children }
  </div>
);

export default App;
