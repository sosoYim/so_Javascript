// 실무에서는 id가 중복되지 않도록 더 복잡하게 저장한다.
// uuid, shortid 등의 라이브러리를 이용해 id를 생성

// 혹은 현재 시간을 milisecond 단위로 저장
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 토글은 on, off가 된다는 뜻이다.
const toggleCompletedById = (todos, id) =>
  todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */

// const toggleCompletedById = (todos, id) =>
//   todos.map(todo => {
//     if (todo.id === id) {
//       todo.completed = !todo.completed;
//     }
//     return todo;
//   });
