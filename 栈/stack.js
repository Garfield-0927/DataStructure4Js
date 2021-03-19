// 基础数组的栈结构的封装

class Stack{

  constructor(){
    this.item = [];
  }

  // 移除栈顶元素
  pop(){
    this.item.pop();
  }

  // 压入栈
  push(el){
    this.item.push(el);
  }

  // 判空
  isEmpty(){
    return this.item.length === 0;
  }

  // 返回栈顶元素
  peek(){
    return this.item[this.item.length-1];
  }

  // 返回栈中元素个数
  size(){
    return this.item.length;
  }
  
}


// 初始化栈
let stack = new Stack();

