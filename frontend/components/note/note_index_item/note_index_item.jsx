import React from 'react';
import Moment from 'react-moment'


class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
  }

  deleteNote(note) {
    return () => {
      this.props.deleteNote(note);
    }
  }

  setCurrentNote(note) {
    return (e) => {
      this.props.setCurrentNote(note);
      e.currentTarget.className = "selected";
    }
  }

  render () {
    let note = this.props.note;
    let selected = "";

    return (
      <li onClick={this.setCurrentNote(note)} className={selected}>
        <div>
          <section>
            <header>{note.title}<img className="delete-note" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694282/note_ejjuma.png" onClick={this.deleteNote(note.id)}/></header>
            <Moment format="MM/DD/YYYY">{note.created_at}</Moment>
            <p>{note.body}</p>
          </section>
        </div>
      </li>
    )
  }
}

export default NoteIndexItem;
