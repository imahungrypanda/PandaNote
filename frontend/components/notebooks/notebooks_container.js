import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { createNotebook,
         deleteNotebook,
         setCurrentNotebook
       } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
  let notebooks = Object.keys(state.notebook.allNotebooks).map(id => state.notebook.allNotebooks[id]);
  return ({
    allNotebooks: notebooks,
    currentNotebook: state.notebook.currentNotebook
  });
};

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
