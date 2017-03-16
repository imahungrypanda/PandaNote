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
            <img className="new-note-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489684767/plus_yfk9un.png" alt="new-note"></img>
          </section>

          <section className="sidebar-actions">
            <img className="notes-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489684767/note_lh9a6u.png" alt="notes"></img>
            <img className="notebook-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489684767/notebook_jjgcyh.png" alt="notebooks"></img>
            <img className="tags-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489684767/price-tag_ddv6gg.png" alt="tags"></img>
          </section>

          <section className="user-profile">
            <img className="user-profile-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489684767/user_v22kdp.png" alt="profile"></img>
          </section>

        </aside>

        <section className="notes-index"></section>


    <input className="" type="button" value="Logout" onClick={this.noteLogout} />



      </div>
    )
  }
}

export default Note;
