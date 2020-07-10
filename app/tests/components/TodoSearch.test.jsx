const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('exists', () => {
    expect(TodoSearch).toExist();
  });

  describe('Search Change', () => {
    it('dispatchs SET_SEARCH_TEXT action on input change', () => {
      const spy = expect.createSpy();
      const action = { type: 'SET_SEARCH_TEXT', payload: 'test foo' };
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
  
      todoSearch.refs.searchText.value = 'test foo';
      TestUtils.Simulate.change(todoSearch.refs.searchText);
  
      expect(spy).toHaveBeenCalledWith(action);
  
    });
  
    it('dispatchs TOGGLE_SHOW_COMPLETED action on checkbox change', () => {
      const spy = expect.createSpy();
      const action = { type: 'TOGGLE_SHOW_COMPLETED' };
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
  
      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);
  
      expect(spy).toHaveBeenCalledWith(action);
  
    });
  });

});
