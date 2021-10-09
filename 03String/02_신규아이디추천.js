function newId(new_id) {
  // \w : 숫자, _
  // + : 하나 이상
  // \. : 아무 문자나
  // {2,} : 두 개 이상
  // | : or
  // ^ : start
  // $ : end
  // [^] : not
  // /^$/ : 빈 문자열

  console.log(new_id);
}

console.log(newId('...!@BaT#*..y.abcdefghijklm'));
