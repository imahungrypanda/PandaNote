import React from 'react';
import Modal from 'react-modal';
import NotebookForm from './notebooks_form';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookModal: false,
      newNotebookModal: false,
      newNotebookName: ""
     };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      notebookModal: false,
      newNotebookModal: false,
      newNotebookName: ""
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <section>
        <img className="notebook-icon"
          src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png"
          alt="notebooks"
          onClick={() => this.setState({notebookModal: true})}></img>

        <Modal
          isOpen={this.state.notebookModal}
          contentLabel="Modal"
          className="notebook-modal"
          onRequestClose={this.closeModal}>

          <header className="notes-index-header">Notebooks</header>

        <input type="button" onClick={() => this.setState({newNotebookModal: true})} />

          <Modal
            isOpen={this.state.newNotebookModal}
            contentLabel="Modal"
            className="new-notebook-modal"
            onRequestClose={this.closeModal} >

            <NotebookForm close={this.closeModal}/>

          </Modal>

        </Modal>
      </section>
    )
  }
}

export default NotebookIndex;
