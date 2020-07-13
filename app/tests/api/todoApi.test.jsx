const expect = require('expect');

const todoApi = require('todoApi');

describe('todoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('exists', () => {
    expect(todoApi).toExist();
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
