import React from 'react';

class NoteEditor extends React.Component {
  render() {
    let title = "";
    let body = "";

    if (this.props.currentNote) {
      title = this.props.currentNote.title;
      body = this.props.currentNote.body;
    }

    return (
      <section className="notes-editor">
        {title}
        <br />
        <p>{body}</p>
      </section>)
  }
}

export default NoteEditor;
