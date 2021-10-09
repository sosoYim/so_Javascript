/*
07. 문자열 압축
같은 문자가 연속으로 반복되는 문자 뒤에 반복 횟수를 표기하는 방법으로 문자열을 압축하라. 단, 반복 횟수가 1이면 생략한다.
*/

const compress = str =>
  str.replace(/(.)\1+/g, match => match[0] + match.length);

console.log(compress('ABBCCCE')); // => AB2C3E
