const React = require('react');
const { connect } = require('react-redux');
import TodoItem from 'TodoItem';

export const TodoList = React.createClass({
  render: function () {
    const { todos, onToggle } = this.props;
    const renderTodos = () => {

      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todos.map(todo => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
