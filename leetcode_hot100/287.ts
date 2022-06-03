function findDuplicate(nums: number[]): number {
  const len = nums.length;
  let l = 0,
    r = len - 1;
  let ans = -1,
    mid: number;

  while (l <= r) {
    mid = Math.floor((l + r) >> 1);
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      nums[i] <= mid + 1 && cnt++;
    }

    if (cnt > mid + 1) {
      r = mid - 1;
      ans = mid + 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
