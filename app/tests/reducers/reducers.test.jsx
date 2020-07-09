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
});
