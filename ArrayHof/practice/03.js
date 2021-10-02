let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0
  );

todos = sortBy(todos, 'content');

console.log(todos);

function solution(nums) {
  const ans = [];

  for (let num of nums) {
    let n = 1;

    let cnt = 0;

    let digits = 1;

    while (num - 9 * 10 ** (n - 1) > 0) {
      num -= 9 * 10 ** (n - 1);

      cnt += 1;

      if (cnt === 2) {
        cnt = 0;

        n += 1;
      }

      digits += 1;
    }

    const string =
      '0'.repeat(Math.ceil(digits / 2) - ('' + num).length) + num || '' + num;

    const res = [];

    console.log(digits, num);

    if (digits === 1) res.push(+string[0]);
    else if (digits === 2) {
      res.push(+string[0]);

      res.unshift(+string[0]);
    } else {
      if (digits % 2 === 0) {
        console.log(string);

        const number =
          +string[string.length - 1] - 1 >= 0
            ? +string[string.length - 1] - 1
            : 9;

        res.push(number);

        res.unshift(number);
      } else {
        const number =
          +string[string.length - 1] - 1 >= 0
            ? +string[string.length - 1] - 1
            : 9;

        res.push(number);
      }

      for (let i = string.length - 2; i > -1; i--) {
        if (i === 0) {
          res.push(+string[i] + 1);

          res.unshift(+string[i] + 1);
        } else {
          res.push(+string[i]);

          res.unshift(+string[i]);
        }
      }
    }

    // console.log(string, res);

    ans.push(+res.join(''));
  }

  return ans;
}
