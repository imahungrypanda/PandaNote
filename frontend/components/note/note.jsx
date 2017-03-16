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



        <section className="notes-index">
          <ul>
            <li>
              <header>Notes Index</header>
            </li>
          </ul>

        </section>


        <section className="notes-editor"></section>





      </div>
    )
  }
}

export default Note;
