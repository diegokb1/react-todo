const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Make dinner',
          completed: true
        },
        {
          id: uuid(),
          text: 'Watch TV',
          completed: false
        }
      ]
    }
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: updatedTodos })

  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1>Todo App</h1>
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={todos} onToggle={this.handleToggle} />
          <AddTodo onTodoAdded={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
