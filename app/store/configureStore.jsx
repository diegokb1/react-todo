const redux = require('redux');
const { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

  return store;
}
