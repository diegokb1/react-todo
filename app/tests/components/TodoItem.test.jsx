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

});
