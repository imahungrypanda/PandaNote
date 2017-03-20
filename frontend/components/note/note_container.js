import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Note from './note';

import { fetchNotes,
         fetchNote,
         deleteNote,
         setCurrentNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  let notes = Object.keys(state.notes.allNotes).map(id => state.notes.allNotes[id]);
  return ({
    currentUser: state.session.currentUser,
    notes: notes,
    currentNote: state.notes.currentNote
  }
)};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
