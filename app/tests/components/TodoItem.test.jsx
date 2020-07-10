const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

import * as actions from 'actions';
import { TodoItem } from 'TodoItem';

describe('TodoItem', () => {
  it('exists', () => {
    expect(TodoItem).toExist();
  });

  describe('Click div', () => {
    it('dispatchs TOGGLE_TODO action when the div is clicked', () => {
      const todoData = { id: 4, text: 'foo', completed: false }
      const action = actions.startToggleTodo(4, true);
      const spy = expect.createSpy();
      const todoItem = TestUtils.renderIntoDocument(<TodoItem dispatch={spy} {...todoData} />);

      const $el = $(ReactDOM.findDOMNode(todoItem));
  
      TestUtils.Simulate.click($el[0]);
  
      expect(spy).toHaveBeenCalledWith(action);
    });
  });

});
