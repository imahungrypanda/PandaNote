import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';


import { fetchNotebooks, fetchNotebook, createNotebook, deleteNotebook
} from './util/notebook_api_util';


window.fetchNotebooks = fetchNotebooks;
window.fetchNotebook  = fetchNotebook;
window.createNotebook = createNotebook;
window.deleteNotebook = deleteNotebook;


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  dynoPinger();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});


const dynoPinger = () => {
  var http = require("http");
  setInterval(function() {
    const currentdate = new Date();
    const hours = currentdate.getHours();
    if (hours > 5 && hours < 22) {
      http.get("https://pandanote.herokuapp.com");
    }
  }, 900000); // every 15 minutes
};
