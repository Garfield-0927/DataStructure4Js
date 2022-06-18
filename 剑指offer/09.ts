class CQueue {
  s1: number[];
  s2: number[];
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  appendTail(value: number): void {
    while (this.s1.length) {
      this.s2.push(this.s1.pop()!);
    }
    this.s1.push(value);
    while (this.s2.length) {
      this.s1.push(this.s2.pop()!);
    }
  }

  deleteHead(): number {
    if (this.s1.length) {
      return this.s1.pop()!;
    }
    return -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
