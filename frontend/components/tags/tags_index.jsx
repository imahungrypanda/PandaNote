import React from 'react';
import Modal from 'react-modal';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagsModal: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  closeModal() {
    this.setState({
      tagsModal: false
    });
  }

  setTag(tag){
    return (e) => {
      e.preventDefault();
      this.props.setCurrentTag(tag);
      this.props.fetchTagNotes(tag.id);
      this.closeModal();
    }
  }

  render(){
    return (
      <div>
        <img className="tags-icon"
          src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694744/price-tag_yqofit.png"
          alt="tags"
          onClick={() => this.setState({tagsModal: true})}></img>

        <Modal
          isOpen={this.state.tagsModal}
          contentLabel="Modal"
          className="tags-modal notebook-modal"
          onRequestClose={this.closeModal}>


          <div className="tag-index-header-container notebooks-index-header-container">
            <header className="tag-index-header notebooks-index-header">Tags</header>
          </div>

          <ul className="tag-inde notebook-index">
            {this.props.allTags.map((tag, idx) => (
              <li key={idx} className="tag-index-item notebook-index-item" onClick={this.setTag(tag)}>
                <div>
                  <h4 className="tag-name notebook-title">{tag.name}
                    </h4>
                  </div>
              </li>
            ))}
          </ul>



        </Modal>
      </div>
    )
  }
}

export default TagsIndex;





// import NotebookForm from './notebooks_form';
//
// class NotebookIndex extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       notebookModal: false,
//       newNotebookModal: false
//      };
//
//     this.closeModal = this.closeModal.bind(this);
//     this.setNotebook = this.setNotebook.bind(this);
//     this.removeNotebook = this.removeNotebook.bind(this);
//   }
//
//
//   setNotebook(notebook) {
//     return (e) => {
//       e.preventDefault();
//       this.props.setCurrentNotebook(notebook);
//       this.closeModal();
//     }
//   }
//
//   removeNotebook(notebook) {
//     return (e) => {
//       e.preventDefault();
//       this.props.setCurrentNotebook(null);
//       if (this.props.notebookCount > 1) {
//         this.props.deleteNotebook(notebook);
//       }
//     }
//   }
//
//   render() {
//     return (
//       <section>
//         <img className="notebook-icon"
//           src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png"
//           alt="notebooks"
//           onClick={() => this.setState({notebookModal: true})}></img>
//
//         <Modal
//           isOpen={this.state.notebookModal}
//           contentLabel="Modal"
//           className="notebook-modal"
//           onRequestClose={this.closeModal}>
//
//           <div className="notebooks-index-header-container">
//             <header className="notebooks-index-header">Notebooks</header>
//             <input type="button" className="button create-notebook-button" value="Create Notebook" onClick={() => this.setState({newNotebookModal: true})} />
//           </div>
//
//           <ul className="notebook-index">
//             {this.props.allNotebooks.map((notebook, idx) => (
//               <li key={idx} className="notebook-index-item" onClick={this.setNotebook(notebook)}>
//                 <div>
//                   <h4 className="notebook-title">{notebook.title}
//                     <img
//                     className="delete-notebook"
//                     src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1490117304/trash_ho5zog.png"
//                     onClick={this.removeNotebook(notebook)}/>
//                     </h4>
//                   </div>
//               </li>
//             ))}
//           </ul>
//
//
//
//           <Modal
//             isOpen={this.state.newNotebookModal}
//             contentLabel="Modal"
//             className="new-notebook-modal"
//             onRequestClose={this.closeModal} >
//             <NotebookForm close={this.closeModal}
//               createNotebook={this.props.createNotebook}
//               setCurrentNotebook={this.props.setCurrentNotebook} />
//           </Modal>
//
//         </Modal>
//       </section>
//     )
//   }
// }
