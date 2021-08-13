// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 使用map，有额外空间
function singleNumber(nums: number[]): number {
  const map = new Map();
  
  for (const item of nums) {
    map.set(item, map.get(item) == null ? 1 : map.get(item) + 1);
  }
  console.log(map);
  let res = null;
  map.forEach((val, key) => {
    if (val === 1) {
      res = key;
    }
  });
  return res
}
console.log(singleNumber([4, 1, 2, 1, 2]));
