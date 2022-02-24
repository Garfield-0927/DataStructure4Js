function maxSubArray(nums: number[]): number {
  let dp = [];
  dp.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
  }

  let res = -Infinity;
  dp.forEach(sum=>{
    res = Math.max(sum, res);
  })

  return res;
}
