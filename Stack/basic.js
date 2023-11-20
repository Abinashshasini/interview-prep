// Basic stack impelemtation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Can't perform pop as the stack is empty";
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'There is no element left in the stack';
    }

    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  printStack() {
    return this.stack;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.peek());
