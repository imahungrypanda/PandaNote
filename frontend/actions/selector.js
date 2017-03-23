export const notesToArray = notes => Object.keys(notes).map(id => notes[id]);

export const selectFirstNotebook = notebooks => {
  if (!notebooks) {
    return null;
  }
  let keys = Object.keys(notebooks);
  return notebooks[keys[0]];
};

export const selectFirstNote = notes => {
  if (!notes) {
    return null;
  }
  let keys = Object.keys(notes);
  return notes[keys[0]];
}

export const tagName = tags => (
  Object.keys(tags).map(id => tags[id].name)
)
