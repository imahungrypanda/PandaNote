import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';

window.login = login;
window.logout = logout;
window.signup = signup;
window.store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>PandaNote</h1>, root);
});
