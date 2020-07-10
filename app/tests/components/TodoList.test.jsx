const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodoItem, { TodoItem } from 'TodoItem';
import { Provider } from 'react-redux';

describe('TodoList', () => {
  it('exists', () => {
    expect(TodoList).toExist();
  });

  it('renders one TodoItem component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Foo',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Bar',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    const store = configure({ todos });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosItemComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todosItemComponents.length).toBe(todos.length);
  });

  it('renders empty message when there are no todos',  () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
