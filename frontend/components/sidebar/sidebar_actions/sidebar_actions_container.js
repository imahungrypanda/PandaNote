import { connect } from 'react-redux';
import { createNote } from '../../../actions/notes_actions';
import SidebarActions from './sidebar_actions';

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note))
})

export default connect(
  mapDispatchToProps
)(SidebarActions);
