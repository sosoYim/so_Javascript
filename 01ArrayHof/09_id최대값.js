const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// id가 양수라는 전제하에 0을 기본값으로 넣어준다.
const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);
const getMaxIdModified = todos =>
  todos.length ? Math.max(...todos.map(todo => todo.id), 0) : 0;

// const getMaxId = todos => todos.reduce((acc, val) => Math.max(val.id, acc), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
console.log(getMaxIdModified(todos));

// Math.max() 에 인수를 안주면 -Infinity
// Math.min() 에 인수를 안주면 Infinity
