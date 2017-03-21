import React from 'react';
import { withRouter } from 'react-router';
import Sidebar from '../sidebar/sidebar_container'
import NoteIndex from '../note/note_index_container';
import NoteEditor from '../editor/note_editor_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }

  render(){
    return (
      <div className="note-container">
        <Sidebar />
        <NoteIndex />
        <NoteEditor />
      </div>
    )
  }
}


export default Home;
