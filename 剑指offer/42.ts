// function maxSubArray(nums: number[]): number {
//   let res = nums[0];
//   let curMax = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     curMax = Math.max(curMax + nums[i], nums[i]);
//     res = Math.max(res, curMax);
//   }

//   return res;
// }


// dp[i] 表示以nums[i]为结尾的最大和
// dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
// return Math.max(dp[i])
function maxSubArray(nums: number[]): number {
  const dp: number[] = [];
  dp.push(nums[0])

  for (let i = 1; i < nums.length; i++) {
    dp.push(Math.max(dp[i-1] + nums[i], nums[i]))
  }

  let res = -Infinity;
  for (const _ of dp) {
    res = Math.max(res, _);
  }
  return res;
}
