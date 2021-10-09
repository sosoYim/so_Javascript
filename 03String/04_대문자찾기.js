function countUpperCase(s) {
  return [...s].filter(v => v === v.toUpperCase()).length;
}

// str.match(정규표현식)
// match : 배열을 반환

console.log(countUpperCase('KoreaTimeGood'));
