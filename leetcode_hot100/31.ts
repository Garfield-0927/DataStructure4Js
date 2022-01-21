/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const isDescSorted = (start: number) => {
    for (let i = start; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    return true;
  };

  if (nums.length === 1) {
    return;
  }

  let i = nums.length - 2;
  while (i >= 0) {
    if (!isDescSorted(i)) {
      let j = nums.length - 1;
      while (nums[i] >= nums[j]) {
        j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];

      for (let k = i + 1; k <= Math.floor((i + nums.length) / 2); k++) {
        [nums[k], nums[nums.length - (k - i)]] = [
          nums[nums.length - (k - i)],
          nums[k],
        ];
      }

      // console.log(nums);
      return;
    }

    i--;
  }

  nums.sort((a, b) => a - b);

  // console.log(nums);
}

nextPermutation([1, 2, 3]); // 1 3 2
nextPermutation([2, 3, 1]); // 3 1 2
nextPermutation([1, 5, 1]); // 5 1 1
nextPermutation([5, 4, 7, 5, 3, 2]); // 5 5 2 3 4 7
nextPermutation([3, 1, 2, 5, 7, 6]); // 3 1 2 6 5 7
nextPermutation([8, 7, 6, 5, 4, 3, 2, 1]);
