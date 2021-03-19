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

  // 讲栈结构的内容以字符串形式返回
  
}


// 初始化栈
// let stack = new Stack();



// 关于栈的算法题举例
// 十进制转二进制
function decimal2binary(num){
  let stack = new Stack();
  while(num){
    let mod = num % 2;
    stack.push(mod);
    num = parseInt(num / 2);
  }
  return stack.item.reverse();
}