import NotesReducer from '../reducers/notes_reducer';

describe('Reducers', () => {
  describe('NotesReducer', () => {
    it('exports a function', () => {
      expect(typeof NotesReducer).toEqual('function');
    });

    it('should intialize with an empty object as the default state', () => {
      expect(NotesReducer(undefined, {})).toEqual({ currentNote: null, allNotes: {} });
    });

    it('should return the previous state if no action is matched', () => {});

    //Handle each action
    describe('RECIEVE_ALL_NOTES', () => {});
    describe('RECIEVE_NOTE', () => {});
    describe('UPDATE_NOTE', () => {});
    describe('MAKE_NOTE', () => {});
    describe('DELETE_NOTE', () => {});
    describe('CURRENT_NOTE', () => {});

  });
});