const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  describe('SetSearchText', () => {
    it('generates search text action', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        payload: 'test text'
      };
      const res = actions.setSearchText('test text');

      expect(res).toEqual(action);
    });
  });

  describe('addTodo', () => {
    it('generates add todo action', () => {
      const action = {
        type: 'ADD_TODO',
        payload: 'todo text'
      };
      const res = actions.addTodo('todo text');

      expect(res).toEqual(action);
    });
  });

  describe('addTodos', () => {
    it('generates add todos action object', () => {
      const todos = [{
        id: 1,
        text: 'anything',
        completed: false,
        createdAt: 600,
        completedAt: undefined
      }];

      const action = { type: 'ADD_TODOS', payload: todos };
      const res = actions.addTodos(todos);
      expect(res).toEqual(action);
    });
  });

  describe('toggleShowCompleted', () => {
    it('generates toggle show completed action', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      const res = actions.toggleShowCompleted();

      expect(res).toEqual(action);
    });
  });

  describe('toggleTodo', () => {
    it('generates toggle todo action', () => {
      const action = {
        type: 'TOGGLE_TODO',
        payload: 4
      };
      const res = actions.toggleTodo(4);

      expect(res).toEqual(action);
    });
  });
});
