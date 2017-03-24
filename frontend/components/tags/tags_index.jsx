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
      this.props.fetchTagNotes(tag.id)
        .then(()=> this.props.setCurrentTag(tag))
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
