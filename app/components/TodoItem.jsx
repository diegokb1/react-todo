const React = require('react');

const TodoItem = React.createClass({
  render: function () {
    const { text, id, completed, onToggle } = this.props;

    return (
      <div onClick={() => {
        onToggle(id)
      }}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = TodoItem;
