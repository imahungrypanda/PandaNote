import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, hashHistory } from 'react-router';
import NotebooksIndex from '../notebooks/notebooks_container';
import TagsIndex from '../tags/tags_index_container';

const style = {
  overlay: {
    backgroundColor: "none"
  }
};


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userModal: false,
      // notebookModal: false,
      // newNotebookModal: false,
      // tagsModal: false,
      // newTagModal: false,
      // newNotebookName: ""
     };

    this.closeModal = this.closeModal.bind(this);
    this.noteLogout = this.noteLogout.bind(this);
    this.notesHome = this.notesHome.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeModal() {
    this.setState({
      userModal: false
    });
  }

  noteLogout() {
    this.props.logout()
      .then(() => hashHistory.replace('/'));
  }

  notesHome() {
    this.props.setCurrentNotebook(null);
    this.props.clearTag();
    hashHistory.replace('/home');
  }

  createNote() {
    let notebookId = this.props.currentNotebook;
    if (!notebookId) {
      notebookId = this.props.selectFirstNotebook(this.props.allNotebooks);
    }

    const blankNote = {
      title: "Untitled",
      body: " ",
      notebook_id: notebookId.id
    }
    this.props.createNote(blankNote);
  }

// TODO: Break out each action into its own functional component.
  render() {
    return (
      <aside className="sidebar">
        <section className="sidebar-logo">
          <img className="logo" src="http://res.cloudinary.com/dbf0xwan5/image/upload/v1489603019/panda_logo_fhv0z7.png" alt="logo"></img>
        </section>

        <section className="sidebar-new-note">
          <img className="new-note-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489693892/plus_copy_ijh8cy.png"
            alt="new-note"
            onClick={this.createNote}></img>
        </section>

        <section className="sidebar-actions">
          <img className="notes-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694567/note_tvm6tj.png"
            alt="notes"
            onClick={this.notesHome}></img>




          <NotebooksIndex />

          <TagsIndex />

        </section>



        <section className="user-profile">
          <img className="user-profile-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489696563/user_copy_rfe19e.png"
            alt="profile"
            onClick={() => this.setState({userModal: true})}></img>

          <Modal
            isOpen={this.state.userModal}
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
