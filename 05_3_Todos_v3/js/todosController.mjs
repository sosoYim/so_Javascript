import TodosModel from './todosModel.mjs';
import TodosView from './todosView.mjs';
import TodosStates from './todosStates.mjs';

/*
 * ===============
 * DOM NODES
 * ===============
 */
const $toggleAll = document.querySelector('.toggle-all');

const $main = document.querySelector('.main');
const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');

const $footer = document.querySelector('.footer');
const $filters = document.querySelector('.filters');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

// TODO: proxy 라는걸 이용해서 오브젝트의 변화를 감지하면
// todos가 바뀔 때마다 랜더링 해주면 this.run 일일이 불러줄 필요 없을 듯

function TodosController() {
  this.model = new TodosModel([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ]);
  this.view = new TodosView();
  this.states = new TodosStates();
  this.bindingObjs = { $todoList, $main, $footer, $todoCount, $clearCompleted };

  $newTodo.onkeyup = e => {
    if (e.key !== 'Enter') return;
    const content = $newTodo.value.trim();
    if (content) {
      // M과 V 분리
      this.model.addTodo(content);
      this.run();
    }
    $newTodo.value = '';
  };

  $toggleAll.onclick = () => {
    const completed = $toggleAll.checked;
    this.model.toggleTodoCompletedAll(completed);
    this.run();
  };

  $todoList.onchange = e => {
    this.model.toggleTodoCompleted(e.target.closest('li').dataset.id);
    this.run();
  };

  // x todo 삭제
  $todoList.onclick = e => {
    if (!e.target.matches('.destroy')) return;
    this.model.removeTodo(e.target.closest('li').dataset.id);
    this.run();
  };

  // todo 편집모드
  $todoList.ondblclick = e => {
    if (!e.target.matches('.view > label')) return;
    e.target.closest('li').classList.add('editing');
    this.run();
  };

  // todo 편집 내용 반영
  $todoList.onkeydown = e => {
    if (e.key !== 'Enter') return;
    this.model.updateTodoContent(
      e.target.parentNode.dataset.id,
      e.target.value.trim()
    );
    this.run();
  };

  // FOOTER

  $clearCompleted.onclick = () => {
    this.model.removeCompleted();
    this.run();
  };

  $filters.onclick = e => {
    if (!e.target.matches('.filters > li > a')) return;
    [...$filters.querySelectorAll('a')].forEach($a => {
      $a.classList.toggle('selected', $a === e.target);
    });

    this.view.states.setFilter(e.target.id);
    // this.setFilter(e.target.id);
    this.run();
  };
}

TodosController.prototype = {
  constructor: TodosController,
  run() {
    this.view.render(this.bindingObjs, this.model.todos);
  }
};

export default TodosController;
