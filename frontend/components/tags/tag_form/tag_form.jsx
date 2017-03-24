import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class TagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      suggestions: []
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentNote) {
      this.setState({tags: newProps.currentNote.tags, suggestions: newProps.allTags});
    }
  }

  handleDelete(i) {
    let tags = this.state.tags;
    this.props.deleteTag(tags[i].id, this.props.currentNote.id);

    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition(tag) {
    let tags = this.state.tags;

    this.props.saveTag(tag, this.props.currentNote.id)
      .then(({ tag }) => {
        tags.push({
          id: tag.id,
          text: tag.name
        });
        this.setState({ tags: tags });
      });
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: tags });
  }

  render () {
    return (
      <div className="tag-form">
        <ReactTags tags={this.state.tags}
          suggestions={this.state.suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          allowDeleteFromEmptyInput={false} />
      </div>
    );
  }
}

export default TagForm;
