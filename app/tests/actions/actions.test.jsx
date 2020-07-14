import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, { firebaseRef } from 'app/firebase/';
import { todosReducer } from '../../reducers/reducers';
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
    it('generates update todo action', () => {
      const action = {
        type: 'UPDATE_TODO',
        payload: { id: 4, updates: { completed: false } }
      };
      const res = actions.updateTodo({ id: 4, updates: { completed: false } });

      expect(res).toEqual(action);
    });
  });

  describe('login', () => {
    it('generates login action with the passed uid', () => {
      const action = {
        type: 'LOGIN',
        payload: 10
      };

      const res = actions.login(10);

      expect(res).toEqual(action);
    });
  });

  describe('logout', () => {
    it('generates logout action', () => {
      const action = {
        type: 'LOGOUT',
      };
      const res = actions.logout();

      expect(res).toEqual(action);
    })
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;
    let uid;
    let todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'foo',
          completed: false,
          createdAt: 23453453
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    describe('startToggleTodo', () => {
      it('toggles todo and dispatchs UPDATE_TODO action', done => {
        const store = createMockStore({ auth: uid });
        store.dispatch(actions.startToggleTodo(testTodoRef.key, true)).then(() => {
          const mockActions = store.getActions();
          expect(mockActions[0].type).toBe('UPDATE_TODO');
          expect(mockActions[0].payload.id).toBe(testTodoRef.key);
          expect(mockActions[0].payload.updates.completedAt).toExist();
          expect(mockActions[0].payload.updates.completed).toBe(true);
          done();
        });
      })
    });

    describe('startAddTodos', () => {
      it('fetchs todos and dispatchs ADD_TODOS action', done => {
        const store = createMockStore({ auth: uid });
        
        store.dispatch(actions.startAddTodos()).then(() => {
          const mockActions = store.getActions();
          expect(mockActions[0].type).toBe('ADD_TODOS');
          expect(mockActions[0].payload.length).toBe(1);
          expect(mockActions[0].payload[0].id).toBe(testTodoRef.key);
          expect(mockActions[0].payload[0].text).toBe('foo');
          expect(mockActions[0].payload[0].completedAt).toBe(undefined);
          expect(mockActions[0].payload[0].completed).toBe(false);
          done();
        }).catch(done());
      })
    });

    describe('startAddTodo', () => {
      it('creates todo and dispatchs ADD_TODO', done => {
        const store = createMockStore({ auth: uid });
        const todoText = 'test text new';
  
        store.dispatch(actions.startAddTodo(todoText)).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual('ADD_TODO');
          expect(actions[0].payload.text).toEqual(todoText);
          
          done();
        }).catch(done());
      })
    });
  });
});
