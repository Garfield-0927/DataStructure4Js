function singleNumbers(nums: number[]): number[] {
  const map = new Map<number, number>();

  nums.forEach(num => {
    const c = map.get(num);
    if(!c) {
      map.set(num, 1);
    } else {
      map.set(num, c + 1);
    }
  })

  const res: number[] = []
  for (const [k, v] of map) {
    v === 1 && res.push(k);
  }
  return res;
};