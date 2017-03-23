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
    if (newProps) {
      // console.log(newProps.tags);
      
      this.setState({tags: newProps.tags, suggestions: newProps.suggestions});
    }
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
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
          handleDrag={this.handleDrag} />
      </div>
    );
  }
}

export default TagForm;
