const React = require('react');

const TodoItem = React.createClass({
  render: function () {
    const { text, id } = this.props;

    return (
      <div>
        {id}-{text}
      </div>
    );
  }
});

module.exports = TodoItem;
