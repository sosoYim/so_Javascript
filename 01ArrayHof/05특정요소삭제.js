let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 하나만 지우면 단수로 이름짓자
const removeTodo = (todos, id) => todos.filter(val => val.id !== id);

todos = removeTodo(todos, 2);
console.log(todos);
