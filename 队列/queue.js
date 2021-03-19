class Queue{

  constructor(){
    this.queue = [];
  }

  // 入队操作
  enqueue(el){
    this.queue.push(el);
  }

  // 出队操作
  dequeue(){
    this.queue.shift();
  }

  // return first element
  front(){
    return this.queue[0];
  }

  // isempty
  Isempty(){
    return this.queue.length === 0;
  }

  // return size
  size(){
    return this.queue.length;
  }

}


// 队列算法题举例
// 击鼓传花，几个朋友围成一圈，开始数数，数到某个数字的人自动淘汰，最后剩下的一个人获胜
// 传入参数是名字的一个数组以及某个数字，数到这个数字的人出局
function jiguchuanhua(nameList, num){
  let queue = new Queue();
  for (const i of nameList) {
    queue.enqueue(i);
  }

  while (queue.size() !== 1){

    for (let i = 0; i < num - 1; i++) {
      let temp = queue.queue[0];
      queue.dequeue();
      queue.enqueue(temp);
    }

    queue.dequeue();
  }

  return queue.front();

}

// let nameList = ["zhang", "li", "gu", "zhao", "sang"]
// console.log(jiguchuanhua(nameList, 3));

