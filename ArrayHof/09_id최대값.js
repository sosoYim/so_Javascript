const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const getMaxId = todos => todos.reduce((acc, val) => Math.max(val.id, acc), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
