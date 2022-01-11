// 解法1
let findUnsortedSubarray = solution1;
function solution1(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  const orderedArr = [...nums].sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1;

  for (; nums[i] === orderedArr[i] || nums[j] === orderedArr[j]; ) {
    if (nums[i] === orderedArr[i]) {
      i++;
    }

    if (nums[j] === orderedArr[j]) {
      j--;
    }

    if (i > j) {
      return 0;
    }
  }

  return j - i + 1;
}
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 2, 3, 4]));
console.log(findUnsortedSubarray([1, 3, 2, 4, 5]));
// 解法2
findUnsortedSubarray = solution2;
function solution2(nums: number[]): number {
  let min = +Infinity;
  let max = -Infinity;
  let left = -1,
    right = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    } else {
      right = i;
    }
    if (nums[nums.length - i - 1] <= min) {
      min = nums[nums.length - i - 1];
    } else {
      left = nums.length - i - 1;
    }
  }

  if (right === -1) {
    return 0;
  }
  return right - left + 1;
}
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
console.log(findUnsortedSubarray([1, 3, 2, 4, 5]));
