const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
const render = todos => {
  const result = todos.reduce((acc, val) => {
    const { id, content } = val;
    const liTag = `<li id="${id}">`;
    const labalTag = `<label><input type="checkbox">${content}</label>`;
    const liCloseTag = '</li>';
    return acc + liTag + labalTag + liCloseTag;
  }, '');
  return result;
};
console.log(render(todos));
