import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Note from './note';

import { fetchNotes,
         fetchNote,
         deleteNote,
         setCurrentNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // let notes = Object.keys(state.notes.allNotes).map(id => state.notes.allNotes[id]);
  // console.log("notes-container", state.notes);
  // notes.forEach(note => console.log(note));
  // console.log("allnotes", state.notes.allNotes);
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes,
    currentNote: state.notes.currentNote
  }
)};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: note => dispatch(fetchNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
