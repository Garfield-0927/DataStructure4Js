function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();

  nums.forEach((item: number) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  let ans: number;
  map.forEach((val, key) => {
    if (val > Math.floor(nums.length / 2)) {
      ans = key;
      return;
    }
  });

  return ans;
}
