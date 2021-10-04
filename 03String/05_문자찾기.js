function count(s, letter) {
  return [...s].filter(v => v === letter).length;
}

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3
