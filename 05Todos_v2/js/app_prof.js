/**
 * 일관된 규칙
 * 가독성
 * 배열 메서드 잘 다루기
 */

// state===========================================================================
// state가 많아지면 const store = {} 형태로 묶을 수도 있다. 한 두개일때는 의미 없음
let todos = [];
let currentFilter = 'all';

// DOM Nodes===========================================================================
const $toggleAll = document.querySelector('.toggle-all');

const $main = document.querySelector('.main');
const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');

const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');
const $footer = document.querySelector('.footer');
const $filters = document.querySelector('.filters');

// state function===========================================================================
// TODO: documentFragment로 랜더링 바꾸기 (리액트는 reconciliation)
const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
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

  // 더 모으고 줄이기

  // todos.length === 0
  //   ? $main.classList.add('hidden')
  //   : $main.classList.remove('hidden');

  // todos.length === 0
  //   ? $main.classList.add('hidden')
  //   : $main.classList.remove('hidden');

  // $main.classList.toggle('hidden', todos.length === 0);
  // $footer.classList.toggle('footer', todos.length === 0);

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  const activeTodos = todos.filter(todo => !todo.completed);

  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

const setTodos = newTodos => {
  // todos setting
  // render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  console.log('FILTER', currentFilter);
  render();
};

const fetchTodos = () => {
  todos = [
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ];
  render();
};

const generateTodoId = () => {
  // id 최대값 + 1
};

const addTodo = content => {
  // 새로운 todo 추가
};

const toggleTodoCompleted = id => {
  // todos 배열의 completed 값 바꾸기
};

const toggleAllTodosCompleted = completed => {
  // completed 값을 받아온 값으로 업데이트
};

const updateTodoContent = (id, content) => {
  // 새로운 content 업데이트
};

const removeTodo = id => {
  // id로 해당 todo 삭제
};

const removeAllCompletedTodos = () => {
  // 완료된 todo 모두 지우기
};

// Event bindings===========================================================================
window.addEventListener('DOMContentLoaded', fetchTodos);

// newTodo 추가
$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  // const content에 트림한 값 체크
  // 둘을 한번에 해주지 않고 변수에 담아준 이유는 분리를 위해. 나중에 모듈 분리시 지저분해질 수도 있어서.?
  // content를 추가

  // 입력칸 비워주기
};

// 체크박스에 change 이벤트를 걸고 싶지만, 또다른 input:text 에도 change이벤트가 발생할 수 있으므로
// 꼭 걸러줘야 한다.
// matches() 혹은 classList.container()

$todoList.onchange = e => {
  if (e.target.classList.contains('toggle'));

  // [id 찾기]
  // 이건 너무 ugly, 속도는 더 빠를 수 있다.
  // const { id } = e.target.parentNode.parentNode.dataset;
  // closest 사용하자 : 가독성 좋음, 유지보수도 좋음
  // e.target.closest('li').dataset.id;

  toggleTodoCompleted();
};

$toggleAll.onchange = e => {
  // checked로 전체 변경할지, unchecked로 할지를 알기 위해서
  const completed = $toggleAll.checked;
  toggleAllTodosCompleted(completed);
};

$todoList.ondblclick = e => {
  // 편집 상태로 바꾸기
  // !e.target.matches('.view > label') return;
  // 가장 가까운 li에 editing 클래스 추가
  // closest 메서드사용해서
};

// 편집한 content 업데이트
$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  // e.target.parentNode.dataset.id
  // e.target.value
  // updateTodoContent(e.target.parentNode.dataset.id, e.target.value)
  // TODO: editing 클래스 빠지게 하는것?
};

// removeTodo
$todoList.onclick = e => {};

// filters 에 선택중인 필터에 .selected
$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;
  // 작은 범위이고 변동이 없으므로
  // NodeList도 라이브할 때가 있으므로
  // 원리 원칙대로 배열로 바꿔서 써주자

  // TODO: toggle 매서드 뭔지 알아보기 => ('추가할 클래스', 조건) (조건이 참일때만 추가되고 아니면 빠진다.)
  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  // TODO: all 어따 써먹음?
  setFilter();
};

$filters.onclick = removeAllCompletedTodos();
