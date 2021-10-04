function newId(new_id) {
  new_id = [...new_id]
    .map(v => (v === v.toUpperCase() ? v.toLowerCase() : v))
    .join('');

  console.log(new_id);
}

console.log(newId('...!@BaT#*..y.abcdefghijklm'));
