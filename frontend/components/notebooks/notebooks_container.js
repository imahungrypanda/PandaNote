import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { createNotebook,
         deleteNotebook,
         setCurrentNotebook
       } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
  let notebooks = Object.keys(state.notebook.allNotebooks).map(id => state.notebook.allNotebooks[id]);
  let length = 0;
  if (notebooks) {
    length = notebooks.length;
  }


  return ({
    allNotebooks: notebooks,
    currentNotebook: state.notebook.currentNotebook,
    notebookCount: length
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
