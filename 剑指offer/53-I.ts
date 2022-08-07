function search(nums: number[], target: number): number {
  // let res = 0;
  // for (const num of nums) {
  //   num === target && res++;
  // }
  // return res;
  return nums.reduce((prev, cur) => {
    if (cur === target) {
      return prev + 1;
    }
    return prev;
  }, 0);
}
