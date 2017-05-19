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
      <h1 className="splash-tagline">A better way to take notes.</h1>
      </section>
    <footer className="splash-footer">
      <a className="github" target="_blank" href="https://github.com/imahungrypanda/PandaNote">
        <img className="github-img" src="https://res.cloudinary.com/dbf0xwan5/image/upload/v1495152995/GitHub-Mark_copy_p9tnvj.png" alt="" />
      </a>
      <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/stevelolsen/">
        <img className="linkedin-img" src="https://res.cloudinary.com/dbf0xwan5/image/upload/v1495152995/linkedin_circle_color-512_copy_mgrxdu.png" alt="" />
      </a>
    </footer>
    { children }
  </div>
);

export default App;
