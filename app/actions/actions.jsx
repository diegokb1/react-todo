export const setSearchText = searchText => {
  return {
    type: 'SET_SEARCH_TEXT',
    payload: searchText
  }
};

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: text
  }
};

export const addTodos = todos => {
  return {
    type: 'ADD_TODOS',
    payload: todos
  };
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const toggleTodo = todoId => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoId
  }
}
