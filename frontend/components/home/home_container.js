import { connect } from 'react-redux';
import Home from './home';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchNotes, setCurrentNote } from '../../actions/notes_actions';
import { fetchTags } from '../../actions/tag_actions';
import { selectFirstNote } from '../../actions/selector';

const mapStateToProps = state => ({
  allNotes: state.allNotes
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
