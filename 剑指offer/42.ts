function maxSubArray(nums: number[]): number {
  let res = nums[0];
  let curMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(curMax + nums[i], nums[i]);
    res = Math.max(res, curMax);
  }

  return res;
}
