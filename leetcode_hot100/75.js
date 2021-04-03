var sortColors = function(nums) {
  let prev = 0;
  let last = nums.length -1;
  for (let i = 0; i <= last; i++) {
    if (nums[i]===0){
      let temp = nums[prev];
      nums[prev] = nums[i];
      nums[i] = temp;
      prev++;
    } else if (nums[i]===2){
      let temp = nums[last];
      nums[last] = nums[i];
      nums[i] = temp;
      last--;
      i--;
    }
  }
};

let arr = [1,2,0];
sortColors(arr);
console.log(arr);