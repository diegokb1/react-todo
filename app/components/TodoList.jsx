const React = require('react');
const TodoItem = require('TodoItem');

const TodoList = React.createClass({
  render: function () {
    const { todos, onToggle } = this.props;
    const renderTodos = () => {
      return todos.map(todo => {
        return (
          <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
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

module.exports = TodoList;
