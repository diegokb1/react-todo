const React = require('react');

const AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    const { onTodoAdded } = this.props;
    const todo = this.refs.todo.value;
    if (todo && todo.length > 0) {
      onTodoAdded(todo);
      this.refs.todo.value = '';
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
