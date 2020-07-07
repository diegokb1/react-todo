const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Make dinner'
        },
        {
          id: 4,
          text: 'Watch TV'
        }
      ]
    }
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
