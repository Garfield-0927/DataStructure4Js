function removeElement(nums: number[], val: number): number {
  let i = 0,
    j = 0;
  for (; i < nums.length; i++) {

    if (val !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  nums.length = j;

  return j;
}
removeElement([1, 2, 3, 3, 4, 6, 5], 3);
