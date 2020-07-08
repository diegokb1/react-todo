const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('exists', () => {
    expect(TodoSearch).toExist();
  });

  describe('Search Change', () => {
    it('calls handleSearch when changing text input', () => {
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
  
      todoSearch.refs.searchText.value = 'test foo';
      TestUtils.Simulate.change(todoSearch.refs.searchText);
  
      expect(spy).toHaveBeenCalledWith(false, 'test foo');
  
    });
  
    it('calls handleSearch when changing checkbox', () => {
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
  
      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);
  
      expect(spy).toHaveBeenCalledWith(true, '');
  
    });
  });

});
