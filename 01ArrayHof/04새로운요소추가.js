let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 좋지 않은 예 :
// const addTodo = (todos, newTodo) => todos.unshift(newTodo);
// 이렇게 하지 말고 복사해서 spread 연산자를 쓰자
const addTodo = (todos, newTodo) => [newTodo, ...todos];

// 이런식으로 두면 todos 에 이벤드를 걸어서 값이 변했는지 확인하고 리랜더링하기 용이하다.
todos = addTodo(todos, { id: 4, content: 'Test', completed: false });
console.log(todos);
