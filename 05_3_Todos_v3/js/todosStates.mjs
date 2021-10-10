let _currentFilter = '';
_currentFilter = 'all';
const TodosStates = (function () {
  function TodosStates() {
    this.currentFilter = _currentFilter;
    // this.todos = [
    //   { id: 3, content: 'JavaScript', completed: false },
    //   { id: 2, content: 'CSS', completed: true },
    //   { id: 1, content: 'HTML', completed: false }
    // ];
  }
  TodosStates.prototype.setFilter = function (newFilter) {
    console.log(this.currentFilter, newFilter);
    this.currentFilter = newFilter;
  };
  return TodosStates;
})();

export default TodosStates;
