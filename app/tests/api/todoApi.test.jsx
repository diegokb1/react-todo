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

  describe('filterTodos', () => {
    const todoOne = { id: 23, text: 'foo', completed: true };
    const todoTwo = { id: 27, text: 'bar', completed: true };
    const todoThree = { id: 29, text: 'foobar', completed: false };
    const todos = [todoOne, todoTwo, todoThree];
    localStorage.setItem('todos', JSON.stringify(todos));

    it('hides the completed todos when not showing completed todos', () => {
      const actualTodos = todoApi.filterTodos(todos, false, '');
      expect(actualTodos).toEqual([todoThree]);
    });

    it('show all todos when showing completed todos sorted by completed', () => {
      const actualTodos = todoApi.filterTodos(todos, true, '');
      expect(actualTodos).toEqual([todoThree, todoOne, todoTwo]);
    });

    it('finds todos containing the search term when searchText is present sorted by completed', () => {
      const actualTodos = todoApi.filterTodos(todos, true, 'Fo');
      expect(actualTodos).toEqual([todoThree, todoOne]);
    });
  });
});
