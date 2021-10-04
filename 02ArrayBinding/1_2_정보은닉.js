const Todos = (() => {
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  return {
    // 이전에 addTodo는 todo와 떨어져 있어서 그랬다.
    // 지금은 객체 안에 있으니 Todo.add()로 호출될 것이다. addTodo는 사족을 더 다는 것이므로 add로만 지정해주자.
    add(newTodo) {
      todos = [newTodo, ...todos];
    },
    render() {
      return todos
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
})();

console.log(Todos.add({ id: 1, content: 'Javascript', completed: false }));
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
