/*
1. Date 객체를 문자열로 반환 0000-00-00
*/

// const formatDate = date => date.toISOString().substring(0, 10);

// 국제 표준시에 9시간 더하기
const formatDate = date => {
  const newDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return newDate.toISOString().substring(0, 10);
};

console.log(formatDate(new Date('2021/07/24')));
