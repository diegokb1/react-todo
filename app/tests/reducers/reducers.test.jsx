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
        const todo = {
          id: 123,
          text: 'something',
          completed: false,
          completedAt: null,
          createdAt: 600
        }
        const action = { 
          type: 'ADD_TODO',
          payload: todo
        };

        const res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toBe(1);
        expect(res[0]).toEqual(todo);
      });
    });

    describe('addTodos', () => {
      it('adds existing todos', () => {
        const initialState = [{
          id: 1,
          text: 'foo',
          createdAt: 1234569,
          completed: true,
          completedAt: 1234569
        }];

        const newTodos = [
          {
          id: 2,
          text: 'bar',
          createdAt: 1234569,
          completed: false,
          completedAt: undefined
          },
          {
            id: 3,
            text: 'foobar',
            createdAt: 600,
            completed: false,
            completedAt: undefined
          },
        ]
        const action = { 
          type: 'ADD_TODOS',
          payload: newTodos
        };

        const res = reducers.todosReducer(df(initialState), df(action));

        expect(res).toEqual([...initialState, ...newTodos]);

      });
    });

    describe('update todo', () => {
      it('updates the selected todo', () => {
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
          type: 'UPDATE_TODO',
          payload: { id: 1, updates: { completedAt: null, completed: false } }
        };

        const res = reducers.todosReducer(df(todos), df(action));

        expect(res[0].completed).toBe(false);
        expect(res[0].completedAt).toBe(null);
        expect(res[0].text).toBe('foo');
      });
    });

    describe('logout', () => {
      it('clears the todo list', () => {
        const initialState = [{
          id: 1,
          text: 'foo',
          createdAt: 1234569,
          completed: true,
          completedAt: 1234569
        }];

        const action = { 
          type: 'LOGOUT'
        };

        const res = reducers.todosReducer(df(initialState), df(action));

        expect(res).toEqual([]);
      })
    });
  });

  describe('authReducer', () => {
    describe('login', () => {
      it('sets the user id', () => {
        const action = {
          type: 'LOGIN',
          payload: 10
        };

        const res = reducers.authReducer(df({ }), df(action));
        expect(res).toEqual({ uid: 10 });
      })
    });
    describe('logout', () => {
      it('set auth to empty object', () => {
        const action = {
          type: 'LOGOUT'
        };

        const res = reducers.authReducer(df({ uid: 4 }), df(action));
        expect(res).toEqual({});
      })
    });
  });
});
