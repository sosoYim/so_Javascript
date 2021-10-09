// class Stack {
//   constructor() {
//     this.arr = [];
//     this.index = 0;
//   }

//   push(item) {
//     this.arr[this.index++] = item;
//   }

//   pop() {
//     if (this.index <= 0) return null;
//     const result = this.arr[--this.index];
//     return result;
//   }
// }

// const stack = new Stack();

class Stack {
  #array;

  constructor(array = []) {
    if (!Array.isArray(array)) throw new TypeError(`${array} is not array.`);
    this.#array = array;
  }

  push(val) {
    return this.#array.push(val);
  }

  pop() {
    if (this.#array.length === 0) return null;
    return this.#array.pop();
  }

  entries() {
    return [...this.#array];
  }
}

const stack = new Stack([1, 2, 3]);
console.log(stack.entries());
console.log(stack);

const Stack2 = (function () {
  function Stack(array = []) {
    this.array = array;
  }
  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.array.push(value);
    }
  };
})();
