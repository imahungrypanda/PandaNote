import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
// import NoteContainer from './note/note_container';
import Home from './home/home_container';

const Root = ({ store }) => {
  const _ensureLoggedin = (nextState, replace) => {
    const current_user = store.getState().session.currentUser;
    if (!current_user) {
      replace("/login")
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const current_user = store.getState().session.currentUser;
    if (current_user) {
      replace("/home");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={ _redirectIfLoggedIn }>

          <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />

        </Route>

        <Route path="/home" component={ Home } onEnter={ _ensureLoggedin } />

      </Router>
    </Provider>
  );
};

export default Root;
