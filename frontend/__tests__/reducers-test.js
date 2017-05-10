import NotesReducer from '../reducers/notes_reducer';

describe('Reducers', () => {
  describe('NotesReducer', () => {
    it('exports a function', () => {
      expect(typeof NotesReducer).toEqual('function');
    });

    it('should intialize with an empty object as the default state', () => {
      expect(NotesReducer(undefined, {})).toEqual({ currentNote: null, allNotes: {} });
    });

    //Handle each action
  });
});