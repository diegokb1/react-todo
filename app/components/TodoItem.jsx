const React = require('react');
const moment = require('moment');

const TodoItem = React.createClass({
  render: function () {
    const { text, id, completed, onToggle, createdAt, completedAt } = this.props;

    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;
      
      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return `${message}${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`
    };

    return (
      <div onClick={() => {
        onToggle(id)
      }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = TodoItem;
