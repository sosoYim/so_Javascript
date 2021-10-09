/*
6. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
*/

// Date 타입이 가지는 값에 대한 이해(정수)가 필요하다.
// 두 날짜의 정수를 뺀 후 밀리세컨드 단위를 제외한 값이 0인지 확인

const isEqualDate = (date1, date2) =>
  Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000) === 0;

const isEqualDate2 = (date1, date2) =>
  Math.floor(date1.getTime() / 1000) === Math.floor(date2.getTime() / 1000);

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate2(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
console.log(isEqualDate2(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
