export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.payload;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    case 'UPDATE_TODO':
      return state.map(todo => {
        const { id, updates } = action.payload;
        if (todo.id === id) {
          return {
            ...todo,
            ...updates
          }
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
};

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { uid: action.payload };
    case 'LOGOUT':
      return { };
    default:
      return state;
  }
}
