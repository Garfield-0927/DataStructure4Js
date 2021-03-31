/*
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 

提示：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 解题思路：
// 创建一个map，[key，value] 键是数组中的成员，值是出现的次数
// 在创建的过程中先判断map中是否已经有这个key了，有的话就在value上加1即可
// 如果没有这个key就创建这个key，并初始value为1
// 最后返回根据value降序的数组，并用map重新构建一个数组返回前k项

// /**
//  * 
//  * @param {Array} nums 
//  * @param {Number} k 
//  * @returns {Array}
//  */

// var topKFrequent = function(nums, k) {
//   const map = new Map();
//   for (const num of nums) {
//     let count = map.get(num)==null ? 0 : map.get(num);
//     map.set(num, count+1);
//   }
//   return [...map]
//   .sort((a,b) => {
//     return b[1] - a[1];
//   })
//   .map(item=>{
//     return item[0]
//   })
//   .slice(0,k);
// };

