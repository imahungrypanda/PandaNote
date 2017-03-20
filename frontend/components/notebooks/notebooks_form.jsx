import React from 'react';
import Modal from 'react-modal';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      newNotebookName: ""
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

          <input className="button" type="button" value="Cancel" onClick={this.props.close}/>
          <input className="button" type="submit" value="Create Notebook" onClick={""}/>
        </form>
    )
  }
}

export default NotebookForm;

// TODO: Add functionality to submit for form
