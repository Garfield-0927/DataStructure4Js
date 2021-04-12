/**
 * 
 * 
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];
  if (!root) {
    return res;
  }

  const tq = [];
  tq.push(root);
  let eleNum = 1;
  let dep = 0;
  while(tq.length!==0){
    let temp = 0;
    res[dep] = [];
    for (let i = 0; i < eleNum; i++) {
      const node = tq.shift();
      res[dep].push(node.val)
      if (node.left) {
        tq.push(node.left);
        temp++;
      }
      if (node.right) {
        tq.push(node.right);
        temp++;
      }
    }
    eleNum = temp;
    dep++;
  }

  res.forEach(arr=>{
    arr.splice(0, arr.length-1);
  })
  return res;
};

let arr = [1,2,3,4,5,6];
console.log(arr.splice(0,arr.length-1));
console.log(arr);



