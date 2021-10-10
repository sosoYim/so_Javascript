/*
06_대소문자 변환
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
*/

// function toggleCase(s) {
//   return [...s]
//     .map(v => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
//     .join('');
// }

// 정규표현식의 | 을 기준으로 '캡쳐'한다
//
const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
    lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  );

console.log(toggleCase('StuDY')); // => 'sTUdy'
