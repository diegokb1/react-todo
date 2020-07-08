const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('exists', () => {
    expect(AddTodo).toExist();
  });

  describe('Form submit', () => {
    it('calls onTodoAdded if valid todo entered', () => {
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo onTodoAdded={spy} />);
      const $el = $(ReactDOM.findDOMNode(addTodo));
  
      addTodo.refs.todo.value = 'test foo';
      TestUtils.Simulate.submit($el.find('form')[0]);
  
      expect(spy).toHaveBeenCalledWith('test foo');
  
    });
  
    it('does not call onTodoAdded if blank todo entered', () => {
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo onTodoAdded={spy} />);
      const $el = $(ReactDOM.findDOMNode(addTodo));
  
      addTodo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);
  
      expect(spy).toNotHaveBeenCalled();
  
    });
  });

});
