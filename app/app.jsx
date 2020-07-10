const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TodoApp = require('TodoApp');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
