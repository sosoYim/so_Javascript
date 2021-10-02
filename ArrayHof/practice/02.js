const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const getValue = (todos, key) => [...todos].map(todo => todo[key]);

console.log(getValue(todos, 'content'));
