/**
 * 
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

// 用dfs递归回溯的思想


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = [];
  let visited = new Array(nums.length).fill(0);

  const dfs = item => {
    // recursion end
    if (item.length === nums.length) {
      res.push(item.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      }
      item.push(nums[i]);
      visited[i] = 1;
      dfs(item);
      item.pop();
      visited[i] = 0;
    }
  };

  dfs([]);
  return res;
};

