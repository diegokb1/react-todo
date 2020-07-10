const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const { TodoItem } = require('TodoItem');

describe('TodoItem', () => {
  it('exists', () => {
    expect(TodoItem).toExist();
  });

  describe('Click div', () => {
    it('dispatchs TOGGLE_TODO action when the div is clicked', () => {
      const todoData = { id: 4, text: 'foo', completed: false }
      const spy = expect.createSpy();
      const todoItem = TestUtils.renderIntoDocument(<TodoItem dispatch={spy} {...todoData} />);

      const $el = $(ReactDOM.findDOMNode(todoItem));
  
      TestUtils.Simulate.click($el[0]);
  
      expect(spy).toHaveBeenCalledWith({ type: 'TOGGLE_TODO', payload: 4 });
    });
  });

});
