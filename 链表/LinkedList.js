// 节点类型
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// 链表
class LinkedList{

  constructor(){
    this.head = null;
    this.size = 0;
  }

  // 追加数据
  append(data){
    let newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = newNode;
    }

    this.size++;
  }
  
  // 插入数据 在某个位置插入某个数据
  insert(pos, data){
    if (pos<0 || pos>this.size) {
      return false;
    }

    let newNode = new Node(data);
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    } else {
      let p = this.head;
      let pre = null;
      while (pos) {
        pre = p;
        p = p.next;
        pos--;
      }
      pre.next = newNode;
      newNode.next = p;
      this.size++;
    }

  }

  // 获取某个位置的数据
  get(pos){
    if (pos<0 || pos>=this.size) {
      return;
    }
    let p = this.head;
    while (pos--) {
      p = p.next;
    }
    return p.data;
  }

  // 修改某个位置的数据
  update(pos, el){
    if (pos<0 || pos>=this.size) {
      return false;
    }
    let p = this.head;
    while (pos--) {
      p= p.next;
    }
    p.data = el;
    return true;
  }

  // 删除某个位置的结点
  removeAt(pos){
    if (pos<0||pos>=this.size) {
      return false;
    }
    if (pos === 0) {
      this.head = this.head.next;
    } else {
      let pre = null;
      let p = this.head;
      while (pos--) {
        pre = p;
        p = p.next;
      }
      pre.next = p.next;
    }
    return true;
  }

  // 删除某个元素
  remove(el){
    if (this.head.data === el) {
      this.head = this.head.next;
      return true;
    } else {
      let p = this.head.next;
      let pre = this.head;
      while (p) {
        if (p.data===el) {
          pre.next = p.next;
          return true;
        }
        pre = p;
        p = p.next;
      }
      return false;
    }
  }
}

