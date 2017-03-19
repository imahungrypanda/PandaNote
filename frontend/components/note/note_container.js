import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Note from './note';

import { fetchNotes, fetchNote, deleteNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {

  // console.log("notes-container", state);
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes
})};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  deleteNote: (note) => dispatch(deleteNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
