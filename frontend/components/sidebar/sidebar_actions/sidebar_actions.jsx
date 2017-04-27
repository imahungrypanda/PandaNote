import React from 'react';
import Modal from 'react-modal';

class SidebarActions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userModal: false,
      notebookModal: false,
      newNotebookModal: false,
      tagsModal: false,
      newTagModal: false,
      newNotebookName: ""
     };

    this.closeUserModal = this.closeUserModal.bind(this);
    this.closeModals = this.closeModals.bind(this);
    this.closeNotebookModal = this.closeNotebookModal.bind(this);
    this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);
    this.closeNewTagModal = this.closeNewTagModal.bind(this);
    this.noteLogout = this.noteLogout.bind(this);
    this.notesHome = this.notesHome.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeModals() {
    this.setState({userModal: false,
    notebookModal: false,
    newNotebookModal: false,
    tagsModal: false,
    newTagModal: false});
  }

  closeUserModal() {
    this.setState({userModal: false});
  }

  closeNotebookModal() {
    this.setState({notebookModal: false});
  }

  closeNewNotebookModal() {
    this.setState({noteNewbookModal: false});
  }

  closeTagsModal() {
    this.setState({tagsModal: false});
  }

  closeNewTagModal() {
    this.setState({tagModal: false});
  }

  noteLogout() {
    this.props.logout()
      .then(() => hashHistory.replace('/'));
  }

  notesHome() {
    hashHistory.replace('/home');
  }

  createNote() {
    const blankNote = {
      title: "Untitled",
      body: " ",
      notebook_id: 0
    }
    this.props.createNote(blankNote);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return (
    <div>
      <section className="sidebar-new-note">
        <img className="new-note-icon"
          src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489693892/plus_copy_ijh8cy.png"
          alt="new-note"
          onClick={this.createNote}></img>
      </section>

      <section className="sidebar-actions">
        <img className="notes-icon"
          src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694567/note_tvm6tj.png"
          alt="notes"
          onClick={this.notesHome}></img>



        <img className="notebook-icon"
          src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png"
          alt="notebooks"
          onClick={() => this.setState({notebookModal: true})}></img>

        <Modal
          isOpen={this.state.newNotebookModal}
          contentLabel="Modal"
          className="new-notebook-modal"

          onRequestClose={this.closeModals}>

          <form className="new-notebook-form">
            <p>CREATE NOTEBOOK</p>
              <input type="text"
                className="new-notebook-name"
                value={this.state.newNotebookName}
                onChange={this.update("newNotebookName")}
                placeholder="Notebook Title" />
            <input className="button" type="button" value="Cancel" onClick={this.closeModals}/>
            <input className="button" type="button" value="Create Notebook" onClick={""}/>
          </form>
        </Modal>



        <img className="tags-icon"
          src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694744/price-tag_yqofit.png"
          alt="tags"
          onClick={() => this.setState({tagsModal: true})}></img>
        <Modal
          isOpen={this.state.tagsModal}
          contentLabel="Modal"
          className="tags-modal"

          onRequestClose={this.closeModals}>
          <input className="button" type="button" value="Logout" onClick={this.noteLogout} />
        </Modal>

      </section>
    </div>
  )
  }
}

export default SidebarActions;
