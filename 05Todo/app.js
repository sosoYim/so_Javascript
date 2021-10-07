// 상태(state) 데이터
let todos = [];

// DOM Nodes
const $form = document.querySelector('form');
const $todoInput = document.querySelector('.todo-input');
const $todoAdd = document.querySelector('.todo-add');
const $todoList = document.querySelector('.todo-list');

// 상태가 변했을 때 렌더링해 줄 함수
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
      <li id="${id}">
      <input type="checkbox"${
        completed ? 'checked' : ''
      }/ class="todo-completed">
      <span>${content}</span>
      <button class="todo-remove">X</button>
      </li>
    `
    )
    .join('');
};

const setTodos = newTodos => {
  todos = newTodos;
  render();
};

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

// Event Handlers Binding
window.addEventListener('DOMContentLoaded', fetchTodos);
$form.onsubmit = e => {
  e.preventDefault();

  const content = $todoInput.value.trim();

  if (content) addTodo(content);

  $todoInput.value = '';
  $todoList.focus();
};

$todoList.onchange = e => {
  const { id } = e.target.parentNode;

  toggleTodoCompleted(id);
};
