import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');
const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

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
        payload: { id: 1, text: 'anything'}
      };
      const res = actions.addTodo({ id: 1, text: 'anything'});

      expect(res).toEqual(action);
    });
  });

  describe('startAddTodo', () => {
    it('creates todo and dispatchs ADD_TODO', done => {
      const store = createMockStore({});
      const todoText = 'test text';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].payload).toInclude({
          text: todoText
        })
        done();
      }).catch(() => done());
    })
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
