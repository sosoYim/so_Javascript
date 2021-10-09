/*
03. A를 #으로
*/

function replaceAtoSharp(s) {
  return [...s].map(v => (v === 'A' ? '#' : v)).join('');
}

// replaceAll() : 2021 최신 버전이다.
// 그냥 replace 하고 정규표현식 g를 주면 된다.

console.log(replaceAtoSharp('BANANA')); // => B#N#N#
