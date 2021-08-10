function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 1) {
    if (target === nums[0]) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  let flag = 0;
  while (left <= right) {
    console.log(nums[mid]);
    
    if (nums[mid] === target) {
      flag = 1;
      break;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (!flag) {
    return [-1, -1];
  } else {
    left = mid - 1;
    right = mid + 1;
    while (nums[left] === target) {
      left--;
    }
    while (nums[right] === target) {
      right++;
    }
    return [left + 1, right - 1];
  }
}

console.log(searchRange([1,4], 4));
