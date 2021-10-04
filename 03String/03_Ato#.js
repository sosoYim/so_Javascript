function replaceAtoSharp(s) {
  return [...s].map(v => (v === 'A' ? '#' : v)).join('');
}

console.log(replaceAtoSharp('BANANA')); // => B#N#N#
