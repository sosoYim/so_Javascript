let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const toggleCompletedAll = todos =>
  todos.map(todo => ({ ...todo, completed: true }));

todos = toggleCompletedAll(todos);
console.log(todos);
