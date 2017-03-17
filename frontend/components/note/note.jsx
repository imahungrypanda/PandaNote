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

        <aside className="sidebar">
          <section className="sidebar-logo">
            <img className="logo" src="http://res.cloudinary.com/dbf0xwan5/image/upload/v1489603019/panda_logo_fhv0z7.png" alt="logo"></img>
          </section>

          <section className="sidebar-new-note">
            <img className="new-note-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489693892/plus_copy_ijh8cy.png" alt="new-note"></img>
          </section>


          <section className="sidebar-actions">
            <img className="notes-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694567/note_tvm6tj.png" alt="notes"></img>
            <img className="notebook-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png" alt="notebooks"></img>
            <img className="tags-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694744/price-tag_yqofit.png" alt="tags"></img>
          </section>

          <section className="user-profile">
            <img className="user-profile-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489696563/user_copy_rfe19e.png" alt="profile"></img>
          </section>

<input className="" type="button" value="Logout" onClick={this.noteLogout} />
        </aside>



        <section className="index">
<header className="notes-index-header">Notes</header>

          <ul className="notes-index">
            <li></li>
            <li>
              <div>
              <section>
                <header>Title</header>
                <time>9:00am</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
              </div>
            </li>
            <li>
              <header>Notes Index</header>
              <time>9:00am</time>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
            <li>
              <header>Notes Index</header>
            </li>
          </ul>

        </section>


        <section className="notes-editor">
          <header>Editor header</header>
          <section>Rich Text Editor</section>
        </section>





      </div>
    )
  }
}

export default Note;
