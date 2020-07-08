const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
const todoApi = require('todoApi');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: todoApi.getTodos()
    }
  },
  componentDidUpdate: function () {
    todoApi.setTodos(this.state.todos);
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = todoApi.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1>Todo App</h1>
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
          <AddTodo onTodoAdded={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
