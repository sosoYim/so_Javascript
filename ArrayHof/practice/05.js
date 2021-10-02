let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const removeTodo = (todos, key) => todos.filter(todo => todo.id !== key);

todos = removeTodo(todos, 2);
console.log(todos);
