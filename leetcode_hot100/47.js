/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */


// 基于全排列，再加一个判断，用于剪枝
// 先对原数组进行排序 然后dfs搜索的时候判断nums[i] === nums[i - 1] && !visited[i - 1]
var permuteUnique = function (nums) {
  let res = [];
  let visited = new Array(nums.length).fill(0);
  nums.sort();
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
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
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

console.log(permuteUnique([3,3,0,3]));
