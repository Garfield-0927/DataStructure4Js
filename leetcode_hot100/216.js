/*
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
示例 2:

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// 解题思路：
// 我们将所有的9个数中选k个的组合情况排出来，存到一个数组里
// 再用filter和reduce方法过滤
// 组合方法：
// 用dfs回溯  
// dfs(cur, n, k, temp);
// cur -> 目前的数字
// n -> 总个数
// k -> 选几个
// temp -> 作为一个结果数组
// 1. 首先考虑递归结束条件
//    - temp的长度+剩下未遍历长度小于k（剪枝后）
//    - temp的长度等于k
// 2. temp长度等于k的话 将temp塞入结果数组
// 3. 递归
//    - 考虑当前位置不选    dfs(cur + 1, n, k, temp);
//    - 考虑当前位置选      dfs(cur + 1, n, k, [...temp, cur]);


var combinationSum3 = function (k, n) {
  let res = [];
  function comb(n, k) {
    const dfs = (cur, n, k, temp) => {
      if (temp.length + (n - cur + 1) < k) {
        return;
      }
      if (temp.length === k) {
        res.push(temp);
        return;
      }
      dfs(cur + 1, n, k, [...temp, cur]);
      dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
  }
  comb(9, k);
  return res.filter(item => item.reduce((pre, cur) => pre + cur) === n)
};
console.log(combinationSum3(3,7));
