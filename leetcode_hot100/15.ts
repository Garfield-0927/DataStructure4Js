function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => b - a);
  const ans: number[][] = [];
  const len = nums.length;
  let sum = 0;
  let i = 0,
    j = 1,
    k = len - 1;
  for (; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] < 0) {
      break;
    }

    k = len - 1;
    for (j = i + 1; j < k; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      if (nums[i] + nums[j] < 0) {
        break;
      }

      for (; k > j; k--) {
 
        sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          ans.push([nums[i], nums[j], nums[k]]);
          k--;
          break;
        } else if (sum > 0) {
          break;
        } 
      }
    }
  }

  return ans;
}


// const threesum = threeSum([-1,0,1,2,-1,-4]);
const threesum = threeSum([0,0,0])
console.log(threesum);
