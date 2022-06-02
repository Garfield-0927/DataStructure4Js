function productExceptSelf(nums: number[]): number[] {
  const res = new Array<number>(nums.length).fill(1);
  for (let i = 0; i < nums.length - 1; i++) {
    res[i + 1] = res[i] * nums[i];
  }
  let r = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= r;
    r *= nums[i];
  }

  return res;
}

productExceptSelf([1, 2, 3, 4, 5]);
