import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

const style = {
  overlay: {
    backgroundColor: "none"
  }
};


class Note extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  deleteNote(note) {
    return (() => {
      this.props.deleteNote(note);
      this.forceUpdate();
    }
    )
  }



  render () {
    let notes = "";

    if (this.props.notes) {
      notes = this.props.notes

      notes = Object.keys(notes).map(id => {
        console.log(id, ": ", new Date(notes[id].created_at));
        const created = notes[id].created_at;
        console.log(created);
        let date = new Date(created);

        return (
          <li key={id}>
            <div>
              <section>
                <header>{notes[id].title}<img className="delete-note" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694282/note_ejjuma.png" onClick={this.deleteNote(notes[id])}/></header>
                <time>{date}</time>
                <p>{notes[id].body}</p>
              </section>
            </div>
          </li>
        )
      }).reverse();
    }

    return (


        <section className="index">
          <header className="notes-index-header">Notes</header>
          <section className="notes-index-container">
            <ul className="notes-index">

              {notes}

            </ul>
          </section>

        </section>
    )
  }
}

export default Note;
