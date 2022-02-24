function canJump(nums: number[]): boolean {
  const len = nums.length;
  let maxStep = 0;
  
  for (let i = 0; i < len; i++) {
    if (i<=maxStep) {
      maxStep = Math.max(maxStep, i + nums[i]);
      if (maxStep >= len -1) {
        return true;
      }
    }
  }
  return false;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));

