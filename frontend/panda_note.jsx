import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';


import { fetchNotes, fetchNote, updateNote, deleteNote
} from './actions/notes_actions';


window.fetchNotes = fetchNotes;
window.fetchNote = fetchNote;
window.updateNote = updateNote;
window.deleteNote = deleteNote;


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
