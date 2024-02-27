var numberOfPairs = function(nums) {
  let countPairs = []
  let countNoPairs = []
  nums = nums.sort((a, b) => a-b)

  while (nums.length > 0) {
    if (nums[0] === nums[1]) {
      countPairs.push(nums.shift())
      countPairs.push(nums.shift())
    } else {
      countNoPairs.push(nums.shift())
    }
  }
  
  return [countPairs.length / 2, countNoPairs.length]
};

nums = [1,3,2,1,3,2,2]
const result = numberOfPairs(nums)
console.log(result);