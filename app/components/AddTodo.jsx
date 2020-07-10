const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const todo = this.refs.todo.value;
    if (todo && todo.length > 0) {
      dispatch(actions.addTodo(todo));
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

export default connect()(AddTodo);
