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

  describe('handleToggle', () => {
    it('toggles the selected todo item completed status', () => {
      const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

      todoApp.setState({ 
        todos: 
        [
          { id: 1, text: 'foo', completed: true },
          { id: 2, text: 'bar', completed: false }
        ] 
      });
      expect(todoApp.state.todos[0].completed).toBe(true);
      expect(todoApp.state.todos[1].completed).toBe(false);
      todoApp.handleToggle(1);

      expect(todoApp.state.todos[0].completed).toBe(false);
      expect(todoApp.state.todos[1].completed).toBe(false);
    });
  });

});
