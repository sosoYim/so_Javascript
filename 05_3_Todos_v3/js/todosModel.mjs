import TodosStates from './todosStates.mjs';

function TodosModel(todos = []) {
  this.todos = todos;
  this.states = new TodosStates();
}

TodosModel.prototype = {
  constructor: TodosModel,

  // TODO: 뷰 기능을 빼서 필요 없을 수도 있음. 좀 더 생각해보자
  setTodos(newTodos) {
    this.todos = newTodos;
  },
  // setFilter(newFilter) {
  //   this.states.currentFilter = newFilter;
  // },
  // Service
  generateTodoId() {
    return Math.max(...this.todos.map(todo => todo.id), 0) + 1;
  },
  // Add
  addTodo(content) {
    this.setTodos([
      { id: this.generateTodoId(), content, completed: false },
      ...this.todos
    ]);
  },
  // Update content
  updateTodoContent(id, content) {
    this.setTodos(
      (this.todos = [...this.todos].map(todo =>
        todo.id === +id ? { ...todo, content } : todo
      ))
    );
  },

  toggleTodoCompleted(id) {
    this.setTodos(
      this.todos.map(todo =>
        todo.id === +id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  },
  toggleTodoCompletedAll(completed) {
    this.setTodos(this.todos.map(todo => ({ ...todo, completed })));
  },
  // Remove
  removeTodo(id) {
    this.setTodos(this.todos.filter(todo => todo.id !== +id));
  },

  removeCompleted() {
    this.setTodos(this.todos.filter(todo => !todo.completed));
  }
};

export default TodosModel;
