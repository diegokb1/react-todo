const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TodoApp = require('TodoApp');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();
const todoApi = require('todoApi');


store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);

  todoApi.setTodos(state.todos);
});

const initialTodos = todoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
