const React = require('react');
const ReactDOM = require('react-dom');
const TodoApp = require('TodoApp');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
