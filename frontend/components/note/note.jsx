import React from 'react';
import { Link, withRouter } from 'react-router';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.noteLogout = this.noteLogout.bind(this);
  }

  noteLogout() {
    this.props.logout().then(() => (
      this.props.router.push("/")
    ));
  }

  render () {
    return (
      <div className="note-container">
        <h1>Note container</h1>

<aside className="sidebar">
  <section className="sidebar-logo">
    <img className="logo" src="http://res.cloudinary.com/dbf0xwan5/image/upload/v1489603019/panda_logo_fhv0z7.png" alt="logo"></img>
  </section>

  <section className="sidebar-new-note">

  </section>

  <section className="sidebar-actions">
    
  </section>

  <section className="user-profile"></section>

</aside>

<section className="notes-index"></section>


    <input className="" type="button" value="Logout" onClick={this.noteLogout} />



      </div>
    )
  }
}

export default Note;
