function isPalindrome(s) {
  const regExp = /[A-Za-z]+/g;
  const base = s.match(regExp).join('').toUpperCase();
  const part1 = base.substring(0, Math.round(base.length / 2));
  const part2 = base.substring(-1, Math.round(base.length / 2));

  return part1 === part2;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
// isPalindrome('race a car'); // => false
