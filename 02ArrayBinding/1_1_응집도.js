/*
// 이 예제는 응집도가 낮다. 이를 객체로 만들어 보자
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const render = todos =>
  todos
    .map(
      ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
        </li>`
    )
    .join('');

console.log(render(todos));
*/

// 대문자로 시작 : 생성자 함수, 클래스, 싱글턴(단 하나만 만드는 것)
const Todos = {
  state: [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ],

  addTodo(newTodo) {
    return [newTodo, ...this.state];
  },
  render() {
    return this.state
      .map(
        ({ id, content, completed }) => `
          <li id="${id}">
            <label><input type="checkbox" ${
              completed ? 'checked' : ''
            }>${content}</label>
          </li>`
      )
      .join('');
  }
};

console.log(Todos.state);

/*
[
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false }
]
*/

console.log(Todos.render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
