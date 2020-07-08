const $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    if (searchText && searchText.length > 0) {
      filteredTodos = filteredTodos.filter(todo => {
        return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      });
    }

    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos
  }
}
