import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NoteIndex from './note_index';

import { fetchNotes,
         fetchNote,
         deleteNote,
         setCurrentNote } from '../../actions/notes_actions';
import { notesToArray } from '../../actions/selector';

const mapStateToProps = (state, ownProps) => {
  // let notes = Object.keys(state.notes.allNotes).map(id => state.notes.allNotes[id]);
  // console.log(state.notebook.allNotebooks);
  // let notebooks = state.notebook.allNotebooks;

  return ({
    currentUser: state.session.currentUser,
    notes: notesToArray(state.notes.allNotes),
    currentNote: state.notes.currentNote,
    currentNotebook: state.notebook.currentNotebook
    // firstNotebook: selectFirstNotebook(notebooks)
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
