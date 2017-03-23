import React from 'react';
import RichTextEditor from 'react-rte';
import TagForm from '../tags/tag_form/tag_form_container';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      body: "",
      tags: {},
      value: RichTextEditor.createEmptyValue()
    };

    this.bodyUpdate = this.bodyUpdate.bind(this);
    this.titleUpdate = this.titleUpdate.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentNote) {
      const value = RichTextEditor.createValueFromString(newProps.currentNote.body, 'html');
      if (this.state.id !== 0
            && newProps.currentNote.id !== this.state.id
            && newProps.allNotes[this.state.id]) {

        // this.props.fetchNoteTags(newProps.currentNote);
        const { id, title, value } = this.state;
        this.props.save({ id, title, body: value.toString('html') });
      }

      const { id, title, body, tags } = newProps.currentNote;
      this.setState({id, title, body, value, tags });
    }
  }

  save(e) {
    e.preventDefault();
    const { id, title, value } = this.state;
    this.props.save({ id, title, body: value.toString('html') })
      .then(({ note }) => this.props.setCurrentNote(note));

  }

  titleUpdate(e) {
    this.setState({ title: e.currentTarget.value });
  }

  bodyUpdate(text) {
    this.setState({ value: text });
  }

  render() {
    if (this.props.currentNote) {
      // console.log(this.props.currentNote.tags);
    }

    return (
      <section className="notes-editor">
        <header className="notes-editor-header">
          <input
            className="note-title"
            value={this.state.title}
            onChange={this.titleUpdate} />
          <div className="editor-detail-buttons">
            <img className="save-button"
              src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1490113936/interface_ulxzah.png"
              onClick={this.save}/>
            <TagForm  />
          </div>
        </header>

        <br />

        <content className="editor">
          <RichTextEditor
            value={this.state.value}
            onChange={this.bodyUpdate}
            />
         </content>
      </section>)
  }
}

export default NoteEditor;
