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
    console.log(props);

  }

  componentWillMount() {
    this.props.fetchNotes();
  }



  render () {
    let notes = "";

    if (this.props.notes) {
      notes = this.props.notes

      notes = Object.keys(notes).map(id => {
        let created = notes[id].created_at;
        let date = new Date(created).toDateString();

        return (
          <li key={id}>
            <div>
              <section>
                <header>{notes[id].title}</header>
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
