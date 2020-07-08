const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoItem = require('TodoItem');

describe('TodoItem', () => {
  it('exists', () => {
    expect(TodoItem).toExist();
  });

  describe('Click div', () => {
    it('calls the onToggleFunction when the div is clicked', () => {
      const todoData = { id: 4, text: 'foo', completed: false }
      const spy = expect.createSpy();
      const todoItem = TestUtils.renderIntoDocument(<TodoItem onToggle={spy} {...todoData} />);

      const $el = $(ReactDOM.findDOMNode(todoItem));
  
      // addTodo.refs.todo.value = 'test foo';
      TestUtils.Simulate.click($el[0]);
  
      expect(spy).toHaveBeenCalledWith(4);
    });
  });

});
