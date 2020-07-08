const expect = require('expect');

const todoApi = require('todoApi');

describe('todoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('exists', () => {
    expect(todoApi).toExist();
  });

  describe('setTodos', () => {
    it('sets valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      todoApi.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);

    });

    it('does not set invalid todos', () => {
      const badTodos = { a: 'b' };
      todoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    });
  });

  describe('getTodos', () => {
    it('returns empty array for bad storage data', () => {
      localStorage.setItem('todos', 'wrong');
      const actualTodos = todoApi.getTodos();
      expect(actualTodos).toEqual([])
    });

    it('returns array for valid storage data', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      
      localStorage.setItem('todos', JSON.stringify(todos));
      
      const actualTodos = todoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
