const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
import TodoApp from 'TodoApp';
import Login from 'Login';
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();
const todoApi = require('todoApi');

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
