import React from 'react';
import { withRouter } from 'react-router';
import Sidebar from '../sidebar/sidebar_container'

class Home extends React.Component {
  render(){
    return (
      <div className="note-container">
        <Sidebar />
      </div>
    )
  }
}


export default Home;
