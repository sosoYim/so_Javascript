function toggleCase(s) {
  return [...s]
    .map(v => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join('');
}
console.log(toggleCase('StuDY')); // => 'sTUdy'
