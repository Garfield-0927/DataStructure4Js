// 排序 + 寻找
function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  const sorted = Array.from(new Set(nums.sort((a, b) => a - b)));
  let ans = 1;
  let cur = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - 1 === sorted[i - 1]) {
      cur++;
      ans = Math.max(ans, cur);
    } else {
      cur = 1;
    }
  }

  return ans;
}

const ans = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(ans);
