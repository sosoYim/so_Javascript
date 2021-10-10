/*
03. 대문자는 몇개인가
*/

function countUpperCase(s) {
  return [...s].filter(v => v === v.toUpperCase()).length;
}

// str.match(정규표현식)
// match : 배열을 반환

function countUpperCase2(s) {
  return s.match(/[A-Z]/g).length;
}

console.log(countUpperCase('KoreaTimeGood'));
console.log(countUpperCase2('KoreaTimeGood'));
