// Question: https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (j = i + 1; j < nums.length; j++) {
        if (nums[j] != 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
    }
  }
};
