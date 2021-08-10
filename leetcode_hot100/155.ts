class MinStack {
  stack: number[];
  min: number;
  constructor() {
    this.stack = new Array();
    this.min = Infinity;
  }

  push(val: number): void {
    if (this.min >= val) {
      this.stack.push(this.min);
      this.min = val;
    }
    this.stack.push(val);
  }

  pop(): void {
    if (this.stack.pop() === this.min) {
      this.min = this.stack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
