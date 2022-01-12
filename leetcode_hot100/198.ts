function rob(nums: number[]): number {
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let res: number[] = [];
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
  }

  return res[nums.length - 1];
}

rob([2, 7, 9, 3, 1]);
rob([2, 1, 1, 2]);
