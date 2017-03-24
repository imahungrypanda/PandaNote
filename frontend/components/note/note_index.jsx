import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import NoteIndexItemContainer from './note_index_item/note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   if (!this.props.currentNote) {
  //     this.props.setCurrentNote(this.props.notes[0]);
  //
  //     console.log(this.props.notes[0]);
  //     // this.props.fetchNoteTags(this.props.notes[0]);
  //   }
  // }

  render () {
    let notes = this.props.notes;
    let noteHeader = "Notes";

    if (this.props.currentNotebook) {
      noteHeader = this.props.currentNotebook.title;
      notes = notes.filter(note => note.notebook_id === this.props.currentNotebook.id);
    }
    else if (this.props.currentTag) {
      noteHeader = this.props.currentTag.name;
      notes = this.props.currentTagNotes;
    }

    return (
        <section className="index">
          <header className="notes-index-header">{noteHeader}</header>
          <section className="notes-index-container">
            <ul className="notes-index">
              {notes.map((note, idx) => <NoteIndexItemContainer key={idx} note={note} />)}
            </ul>
          </section>

        </section>
    )
  }
}

export default NoteIndex;
