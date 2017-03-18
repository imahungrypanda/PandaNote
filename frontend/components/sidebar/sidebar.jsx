import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, hashHistory } from 'react-router';

const style = {
  overlay: {
    backgroundColor: "none"
  }
};

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.noteLogout = this.noteLogout.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    console.log("close");
    this.setState({modalIsOpen: false});
  }

  noteLogout() {
    console.log(this.props.logout);
    this.props.logout()
      .then(() => hashHistory.replace('/'));
  }

  render() {

    return (
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
          <img className="user-profile-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489696563/user_copy_rfe19e.png"
            alt="profile"
            onClick={this.openModal}></img>

          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Modal"
            className="user-profile-modal"
            style={style}
            onRequestClose={this.closeModal}>
            <input className="button" type="button" value="Logout" onClick={this.noteLogout} />
          </Modal>
        </section>

      </aside>
    )
  }
}


export default Sidebar;
