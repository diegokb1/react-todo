const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('exists', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('Adds a new todo item', () => {
      const todoText = 'test text';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

      todoApp.setState({ todos: [] });
      expect(todoApp.state.todos.length).toBe(0);
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(todoText);
    });
  });

});
