/*

if (!Array.prototype.filter) {
  Array.prototype.filter = function (cb, thisArg) {
    if (typeof cb !== 'function') throw new TypeError(cb + 'is not a function');
    thisArg = thisArg || window;
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (cb.call(thisArg, this[i], i, this)) res = [...res, this[i]];
    }
    return res;
  };
}

*/
