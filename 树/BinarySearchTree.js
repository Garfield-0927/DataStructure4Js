// 二叉搜索树
class Node{
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }


  // 插入结点
  insert(key){
    let newNode = new Node(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
        return;
      }
      this.insertNode(node.left, newNode);
    } else {
      if (node.right == null) {
        node.right = newNode;
        return;
      }
      this.insertNode(node.right, newNode);
    }
  }


  // 遍历
  // 先序   根左右
  // preOrderTraverse(root){
  //   if (root == null) {
  //     return;
  //   }
  //   console.log(root.key);
  //   this.preOrderTraverse(root.left);
  //   this.preOrderTraverse(root.right);
  // }

  // 非递归实现树的先序遍历

  // 非递归思想
  /*
    1.根节点入栈
    2.根节点出栈，右节点入栈，左节点入栈
    3.左节点（作为新的根节点）出栈，右节点入栈，左节点入栈
    4.循环直至栈空
  */

  preOrderTraverse(root){
    let stack = [];
    stack.push(root);
    while (stack.length!==0) {
      let node = stack.pop();
      console.log(node.key);
      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left)
      }
    }


  }



  // 中序   左根右
  midOrderTraverse(root){
    if (root == null) {
      return;
    }
    this.midOrderTraverse(root.left);
    console.log(root.key);
    this.midOrderTraverse(root.right);
  }

  /*
    1.
  */


  // 后序   左右根
  postOrderTraverse(root){
    if (root == null) {
      return;
    }
    this.postOrderTraverse(root.left);
    this.postOrderTraverse(root.right);
    console.log(root.key);
  }

}

let bst = new BST();

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

// console.log(bst);
// bst.preOrderTraverse(bst.root)
// bst.midOrderTraverse(bst.root)
// bst.postOrderTraverse(bst.root)

// const str = " do re  mi   fa   " 
// function reverseByWord(str = '') {
//   	const strArr = str.split('')
//     console.log(strArr);
    
//     let copy = strArr.reverse();
//     copy.push(" ");
//     let temp = []
//     for (let i=0; i<copy.length; i++) {
//       if (copy[i] !== " ") {
//         temp.push(copy[i])
//       }
//       else{
//         let length = temp.length;
//         for (let j = 0; j<temp.length;j++) {

//           copy[i-temp.length+j] = temp[length - 1 - j ]
//         }

//         temp = [];
//       }
//     }

//     copy.pop()
//     console.log(copy);
//     return strArr.join('')
// }

// reverseByWord(str)



function task1(cb) {
  setTimeout(() => {
      console.log(1)
      cb()
  }, 1000)
}
function task2(cb) {
  setTimeout(() => {
    console.log(2)
    cb()
  }, 2000)
}
function task3(cb) {
  setTimeout(() => {
    console.log(3)
    cb()
  }, 500)
}

// threadPollExe([task1,task1,task3],2)    // 1 3 2
// threadPollExe([task1,task1,task3],3)    // 3 1 2


// function threadPollExe(arr, num){

//   let onGoing = 0;
//   let poll = [];
  
//   for(let fn of arr){
//     poll.push(fn)
//   }
//   console.log(poll);
//   while (poll.length!==0) {
//     executeNext();
//   }

//   function executeNext(){
//     if (onGoing>=num) {
//       return ;
//     } else {
//       let pro = poll.shift();
//       console.log(pro);
//       pro()
//       onGoing++;
//     }
//   }

// }

// threadPollExe([task1,task1,task3],1)    // 1 2 3



