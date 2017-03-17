import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Note from './note';

import { fetchNotes } from '../../actions/notes_actions';

const mapStateToProps = ({ session, notes }) => ({
  session,
  notes
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
