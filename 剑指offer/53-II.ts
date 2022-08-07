function missingNumber(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid !== nums[mid] && mid - 1 === nums[mid - 1]) {
      return mid;
    }
    if(mid === nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
