export const notesToArray = notes => Object.keys(notes).map(id => notes[id]);

export const selectFirstNotebook = notebooks => {
  if (!notebooks) {
    return null;
  }
  let keys = Object.keys(notebooks);
  return notebooks[keys[0]];
};
