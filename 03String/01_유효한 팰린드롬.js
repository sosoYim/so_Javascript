/*
문자열 s가 주어지면 영문자와 숫자만 고려하고 대소문자를 무시하여 회문인지 확인한다.

leetcode: valid-palindrome
*/

// (mine)
function isPalindrome(s) {
  const regExp = /[A-Za-z]+/g;
  const base = s.match(regExp).join('').toUpperCase();
  const part1 = base.substring(0, Math.round(base.length / 2));
  const part2 = base.substring(-1, Math.round(base.length / 2));

  return part1 === part2;
}

// (sol)
function isPalindrome2(s) {
  // [] : or
  // 소문자 알파벳(a-z)이나 숫자(0-9)가 아닌(^) 것
  const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return temp === [...temp].reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome2('A man, a plan, a canal: Panama')); // => true
// isPalindrome('race a car'); // => false
