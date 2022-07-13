class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x: number): void {
    this.stack.push(x);
 
    this.minStack.push(
      this.minStack.length === 0 ||
        this.minStack[this.minStack.length - 1] > x
        ? x
        : this.minStack[this.minStack.length - 1]
    );
   
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
