function maxSubArray(nums: number[]): number {
  let sum = -101;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          let temp = nums.slice(i, j).reduce((pre, cur) => pre + cur)
          sum = sum > temp ? sum : temp
      }

  }
  return sum;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
