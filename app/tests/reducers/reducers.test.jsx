const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    describe('set search action', () => {
      it('sets search text', () => {
        const action = {
          type: 'SET_SEARCH_TEXT',
          payload: 'dog'
        };

        const res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toBe('dog');
      });
    });
  });

  describe('showCompletedReducer', () => {
    describe('toggle show completed action', () => {
      it('toggles the show completed state to true if it is false', () => {
        const action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };

        const res = reducers.showCompletedReducer(df(false), df(action));

        expect(res).toBe(true);
      });

      it('toggles the show completed state to false if it is true', () => {
        const action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };

        const res = reducers.showCompletedReducer(df(true), df(action));

        expect(res).toBe(false);
      });
    });
  });

  describe('todosReducer', () => {
    describe('add todo', () => {
      it('adds a new todo', () => {
        const action = { 
          type: 'ADD_TODO',
          payload: 'go for a run'
        };

        const res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toBe(1);
        expect(res[0].text).toBe('go for a run');
      });
    });

    describe('toggle todo', () => {
      it('sets the todo completed to false and completedAt to undefined when the todo completed is true', () => {
        const todos = [
          {
            id: 1,
            text: 'foo',
            createdAt: 1234569,
            completed: true,
            completedAt: 1234569
          },
          {
            id: 2,
            text: 'bar',
            createdAt: 1234569,
            completed: false,
            completedAt: undefined
          }
        ];

        const action = {
          type: 'TOGGLE_TODO',
          payload: 1
        };

        const res = reducers.todosReducer(df(todos), df(action));

        expect(res[0].completed).toBe(false);
        expect(res[0].completedAt).toBe(undefined);
      });
    });
  });
});