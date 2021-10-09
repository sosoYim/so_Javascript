// State
let todos = [];
let currentFilter = 'all';

// Dom Nodes
const $toggleAll = document.querySelector('.toggle-all');

const $main = document.querySelector('.main');
const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');

const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

// Function==========

/*
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
*/

// Rendering
const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : todo
  );

  $todoList.innerHTML = _todos
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

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  const activeTodos = todos.filter(todo => !todo.completed);

  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
  // viewByTodosLength();
};

const setTodos = newTodos => {
  todos = newTodos;
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  render();
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

// Update content
const updateTodoContent = (id, content) => {
  console.log(id, content);
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

const toggleTodoCompletedAll = completed => {
  // 시간나면 체크하고 전체 선택 취소도 만들자
  setTodos(todos.map(todo => ({ ...todo, completed })));
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

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = $newTodo.value.trim();
  if (content) addTodo(content);
  $newTodo.value = '';
  // $newTodo.focus();
};

$toggleAll.onclick = () => {
  const completed = $toggleAll.checked;
  toggleTodoCompletedAll(completed);
};

$todoList.onchange = e => {
  // const { id } = e.target.parentNode.parentNode.dataset;
  toggleTodoCompleted(e.target.closest('li').dataset.id);
};

// x todo 삭제
$todoList.onclick = e => {
  if (!e.target.matches('.destroy')) return;
  removeTodo(e.target.closest('li').dataset.id);
};

// todo 편집
$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');

  // const $edit = e.target.parentNode.parentNode;

  // $edit.classList.add('editing');
  // $edit.focus();
};
// TODO: onkeyup 왜 안됨??
$todoList.onkeydown = e => {
  console.log(e.key);
  if (e.key !== 'Enter') return;
  updateTodoContent(e.target.parentNode.dataset.id, e.target.value.trim());
};

// FOOTER ==========================

$clearCompleted.onclick = () => {
  removeCompleted();
};

const $filters = document.querySelector('.filters');

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;
  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  setFilter(e.target.id);

  // [BEFORE CORRECTION]
  // const category = e.target.matches('#active')
  //   ? 'active'
  //   : e.target.matches('#completed')
  //   ? 'completed'
  //   : 'all';

  // // if (category === 'active' || category === 'completed' || category === 'all'){
  // if (e.target.matches(`#${category}`)) {
  //   render(category);
  //   document.getElementById(`#${category}`);
  // }
};
