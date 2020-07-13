const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TodoApp = require('TodoApp');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();
const todoApi = require('todoApi');

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
