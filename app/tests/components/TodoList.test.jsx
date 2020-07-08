const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoList = require('TodoList');
const TodoItem = require('TodoItem');

describe('TodoList', () => {
  it('exists', () => {
    expect(TodoList).toExist();
  });

  it('renders one TodoItem component for each todo item',  () => {
    const todos = [
      {
        id: 1,
        text: 'Foo'
      },
      {
        id: 2,
        text: 'Bar'
      }
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosItemComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosItemComponents.length).toBe(todos.length);
  });

});
