function countUpperCase(s) {
  return [...s].filter(v => v === v.toUpperCase()).length;
}

console.log(countUpperCase('KoreaTimeGood'));
