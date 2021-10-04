let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 외부 데이터를 변경하지 않도록 복사해서 sort하자
// sort는 뮤테이터디.
const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0
  );

// 프론트엔드 개발자들이 다루는 데이터는 대부분 뷰와 직결된다.
// 복사하지 않고 바로 sort하면 isEqual 같은 함수를 사용해서 안의 데이터가 바뀌었는지 안바뀌었는지 다 확인해야 한다.
// 가급적 accessor로 동작하도록 만들어야 바뀌었을 때 바뀐줄 안다.
// 그러면 totods 에 이벤드를 걸어서 값이 변했는지 확인하고 리랜더링하기 용이하다.
todos = sortBy(todos, 'id');
todos = sortBy(todos, 'content');
todos = sortBy(todos, 'completed');

console.log(todos);

const arr = ['hi', 'you'];
const result = arr.flatMap(v => v.split(''));
console.log(result);
console.log(arr);
