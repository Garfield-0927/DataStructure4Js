/**
 * 
 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
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

  return res;
};