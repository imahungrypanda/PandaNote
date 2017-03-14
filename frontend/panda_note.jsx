import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
// import { login, logout, signup } from './util/session_api_util';
//
// window.login = login;
// window.logout = logout;
// window.signup = signup;
window.store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
