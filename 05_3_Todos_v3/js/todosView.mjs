import TodosStates from './todosStates.mjs';

function TodosView() {
  this.states = new TodosStates();
}
TodosView.prototype = {
  constructor: TodosView,
  render({ $todoList, $main, $footer, $todoCount, $clearCompleted }, todos) {
    // console.log('filter in render', this.states.currentFilter);
    const _todos = todos.filter(todo =>
      this.states.currentFilter === 'completed'
        ? todo.completed
        : this.states.currentFilter === 'active'
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
  }
};

export default TodosView;
