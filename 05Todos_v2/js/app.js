// State
let todos = [];

// Dom Nodes
const $toggleAll = document.querySelector('.toggle-all');

const $main = document.querySelector('.main');
const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');

const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

// Function==========

const todoCount = () => {
  $todoCount.innerHTML = `${todos.length} ${
    todos.length > 1 ? 'items' : 'item'
  } left`;
};

const completedCount = () => todos.filter(({ completed }) => completed).length;
const viewByTodosLength = () => {
  todoCount();

  todos.length === 0
    ? $main.classList.add('hidden')
    : $main.classList.remove('hidden');

  completedCount() === 0
    ? $clearCompleted.classList.add('hidden')
    : $clearCompleted.classList.remove('hidden');
};

// Rendering
const render = (category = 'all') => {
  const showTodos =
    category === 'all'
      ? [...todos]
      : category === 'active'
      ? todos.filter(todo => !todo.completed)
      : todos.filter(todo => todo.completed);

  $todoList.innerHTML = showTodos
    .map(
      ({ id, content, completed }) => `
      <li data-id="${id}">
      <div class="view">
        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
        <label>${content}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${content}" />
    </li>
  `
    )
    .join('');
};

const setTodos = newTodos => {
  todos = newTodos;
  // TODO: 여기두는게 맞나??
  render();
  viewByTodosLength();
  console.log(todos);
};

// first fetch
const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ]);
};

// Add
const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

// Update
const updateTodo = (id, content) => {
  // TODO: 값은 받아지는데 적용 안됨
  setTodos(
    (todos = todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)))
  );
};

// Toggle check
const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleTodoCompletedAll = () => {
  // 시간나면 체크하고 전체 선택 취소도 만들자
  setTodos(todos.map(todo => ({ ...todo, completed: true })));
};

// Delete
const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// Event Binding==============

window.addEventListener('DOMContentLoaded', fetchTodos);

$toggleAll.onclick = () => {
  toggleTodoCompletedAll();
};

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  if ($newTodo.value.trim()) addTodo($newTodo.value);
  $newTodo.value = '';
  // $newTodo.focus();
};

$todoList.onchange = e => {
  const { id } = e.target.parentNode.parentNode.dataset;
  toggleTodoCompleted(id);
};

$todoList.onclick = e => {
  // x 삭제
  if (e.target.matches('.destroy')) {
    const { id } = e.target.parentNode.parentNode.dataset;
    removeTodo(id);
  }
};

$todoList.ondblclick = e => {
  const $edit = e.target.parentNode.parentNode;

  $edit.classList.add('editing');
  $edit.focus();
};

$todoList.onkeydown = e => {
  if (e.key !== 'Enter') return;
  const $oldContent = e.target.getAttribute('value');
  const $newContent = e.target.value.trim();
  if ($newContent && $oldContent !== $newContent)
    updateTodo(e.target.parentNode.dataset.id, $newContent);
};

// FOOTER ==========================

$clearCompleted.onclick = () => {
  removeCompleted();
};

const $filters = document.querySelector('.filters');

$filters.onclick = e => {
  const category = e.target.matches('#active')
    ? 'active'
    : e.target.matches('#completed')
    ? 'completed'
    : 'all';

  // if (category === 'active' || category === 'completed' || category === 'all'){
  if (e.target.matches(`#${category}`)) {
    render(category);
    document.getElementById(`#${category}`);
  }
};
