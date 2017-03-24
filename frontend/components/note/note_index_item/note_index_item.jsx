import React from 'react';
import Moment from 'react-moment'


class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeNote = this.removeNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.selected = this.selected.bind(this);
  }

  removeNote(note) {
    return ((e) => {
      e.preventDefault();
      this.props.setCurrentNote(null);
      this.props.deleteNote(note);
    })
  }

  setCurrentNote(note) {
    return (e) => {
      e.preventDefault();
      // console.log(note);
      this.props.currentNote.className = "";
      this.props.setCurrentNote(note);
      e.currentTarget.className = "selected";
    }
  }

  selected() {
    if (this.props.currentNote && this.props.currentNote.id === this.props.note.id) {
      return "selected";
    }
    return "";
  }

  render () {
    let note = this.props.note;
    // console.log(note);
    let selected = "";

    return (
      <li  className={this.selected()} >
        <div>
          <section onClick={this.setCurrentNote(note)} >
            <header>{note.title}
              <img
                className="delete-note"
                src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1490117304/trash_ho5zog.png"
                onClick={this.removeNote(note)}/>
            </header>
            <Moment format="MM/DD/YYYY">{note.created_at}</Moment>
            <p>{note.body.replace(/<(?:.|\n)*?>/gm, '')}</p>
          </section>
        </div>
      </li>
    )
  }
}

export default NoteIndexItem;
