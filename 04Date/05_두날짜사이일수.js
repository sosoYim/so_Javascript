/*
5. 두 날짜 사이의 일수 구하기
*/

// milisecond 차이를 구하고
// 양수로 변환한 다음
// 하루치 밀리세컨드로 나눠서 올림 (24 * 60 * 60 * 1000)

const diffDays = (date1, date2) =>
  Math.ceil(
    Math.abs(date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)
  );

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
