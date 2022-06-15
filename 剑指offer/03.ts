function findRepeatNumber(nums: number[]): number {
  const m = new Map<number, number>();
  for (const num of nums) {
    if(m.has(num)) {
      return num;
    } else {
      m.set(num, 1)
    }
  }

  // just for ts error
  return 0;
};