const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

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
  handleAddTodo: function (text) {
    alert(`new todo: ${text}`);
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1>Todo App</h1>
          <TodoList todos={todos} />
          <AddTodo onTodoAdded={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
