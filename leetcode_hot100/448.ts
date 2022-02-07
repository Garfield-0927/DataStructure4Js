function findDisappearedNumbers(nums: number[]): number[] {
  const ans: Array<number> = [];

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    ans[i] = i + 1;
  }

  nums.forEach(num => {
    ans[num - 1] = undefined as any;
  });

  return ans.filter(num => num !== undefined);
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
