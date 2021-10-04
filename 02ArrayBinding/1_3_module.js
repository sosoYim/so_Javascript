// Todos.js 와 같이 파일 이름을 지정해준다.
// 모듈은 모듈 스코프를 만든다. 따라서 모듈은 해당 모듈 렉시컬 환경을 기억하는 클로저다.

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const add = newTodo => {
  todos = [newTodo, ...todos];
};

const render = () =>
  todos
    .map(
      ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${
            completed ? 'checked' : ''
          }>${content}</label>
        </li>`
    )
    .join('');

// 객체에 이름을 지정해주고 값을 담아서 export
const Todos = { add, render };

export default Todos;
