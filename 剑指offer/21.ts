// function exchange(nums: number[]): number[] {
//   const even: number[] = [];
//   const odd: number[] = [];

//   nums.forEach(num => {
//     if (num % 2) {
//       even.push(num);
//     } else {
//       odd.push(num);
//     }
//   });

//   return [...even, ...odd];
// }

// 双指针

function exchange(nums: number[]): number[] {
  let right = nums.length - 1;
  let left = 0;

  while (right > left) {
    while (nums[right] % 2 === 0) right--;
    while (nums[left] % 2) left++;

    if (right > left) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      right--;
      left++;
    }
    
  }
  return nums;
}

console.log(exchange([1, 2, 3, 4]));
