/*
1. Date 객체를 문자열로 반환 0000-00-00
*/

// getMonth() : 월을 0~11로 처리한다.

// const formatDate = date =>
//   // if (Object.prototype.toString(date) !== '[object Date]')
//   //   throw new TypeError(`${date} is not a Date object`);
//   `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const formatDate = date => date.toISOString().substring(0, 10);

console.log(formatDate(new Date('2021/07/24')));
