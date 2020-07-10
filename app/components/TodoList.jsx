const React = require('react');
const { connect } = require('react-redux');
const todoApi = require('todoApi');
import TodoItem from 'TodoItem';

export const TodoList = React.createClass({
  render: function () {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {

      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todoApi.filterTodos(todos, showCompleted, searchText).map(todo => {
        return (
          <TodoItem key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  state => {
    return state;
  }
)(TodoList);
