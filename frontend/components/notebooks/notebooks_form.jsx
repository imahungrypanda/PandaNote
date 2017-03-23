import React from 'react';
import Modal from 'react-modal';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNotebookName: ""
    }

    this.createNotebook = this.createNotebook.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  createNotebook() {
    this.props.createNotebook({title: this.state.newNotebookName})
      .then(({ notebook }) => this.props.setCurrentNotebook(notebook))
      .then(() => this.props.close());
  }

  render() {
    return (
        <form className="new-notebook-form">
          <p>CREATE NOTEBOOK</p>
          <input type="text"
            className="new-notebook-name"
            value={this.state.newNotebookName}
            onChange={this.update("newNotebookName")}
            placeholder="Notebook Title" />

          <input className="button" type="submit" value="Create Notebook" onClick={this.createNotebook}/>
          <input className="button" type="button" value="Cancel" onClick={this.props.close}/>
        </form>
    )
  }
}

export default NotebookForm;
