import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import NoteIndexItemContainer from './note_index_item/note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.currentNote) {
      this.props.setCurrentNote(this.props.notes[0]);
    }
  }

  render () {
    return (
        <section className="index">
          <header className="notes-index-header">Notes</header>
          <section className="notes-index-container">
            <ul className="notes-index">
              {this.props.notes.map((note, idx) => <NoteIndexItemContainer key={idx} note={note} />)}
            </ul>
          </section>

        </section>
    )
  }
}

export default NoteIndex;
