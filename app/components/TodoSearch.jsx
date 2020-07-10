const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export const TodoSearch = React.createClass({
  render: function () {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" value={searchText} placeholder="Search todos..." onChange={() => {
            const searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/> 
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect(
  state => {
    const { showCompleted, searchText } = state;
    return { showCompleted, searchText }
  }
)(TodoSearch);
