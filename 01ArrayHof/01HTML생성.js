const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

/*= === map 사용법=== = */
const render = todos =>
  todos
    .map(
      ({ id, content, completed }) =>
        `<li id="${id}">
          <label><input type="checkbox" ${
            completed ? 'checked' : ''
          }>${content}</label>
        </li>`
    )
    .join('');

/*= === reduce 사용법=== = */
// const render = todos =>
//   todos.reduce(
//     (html, { id, content, completed }) =>
//       `<li id="${id}">
//           <label><input type="checkbox" ${
//             completed ? 'checked' : ''
//           }>${content}</label>
//         </li>`,
//     ''
//   );

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
console.log(render(todos));

/*
map의 콜백함수에 다음과 같이 지저분하게 했었다...

// const result = todos.reduce((acc, val) => {
//   const { id, content } = val;
//   const liTag = `<li id="${id}">`;
//   const labalTag = `<label><input type="checkbox">${content}</label>`;
//   const liCloseTag = '</li>';
//   return acc + liTag + labalTag + liCloseTag;
// }, '');
// return result;
*/
