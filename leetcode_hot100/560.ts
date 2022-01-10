function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let sum = 0,
    res = 0;
  let target: number;
  map.set(0, 1);
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    target = sum - k;
    console.log(map);

    if (map.has(target)) {
      res += map.get(target)!;
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum)! + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return res;
}

subarraySum([1, 2, 3], 3);
