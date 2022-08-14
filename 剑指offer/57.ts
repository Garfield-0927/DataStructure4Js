function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const t = target - nums[i];
    if(map.get(t)) {
      return [nums[i], t]
    }
    map.set(nums[i], t);
  }
  return [];
};