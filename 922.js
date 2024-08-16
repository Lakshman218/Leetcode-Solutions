var sortArrayByParityII = function(nums) {
  let result = new Array(nums)
  let even = 0
  let odd = 1
  for(let i=0; i<nums.length; i++) {
      if(nums[i] % 2 === 0) {
          result[even] = nums[i]
          even += 2
      } else {
          result[odd] = nums[i]
          odd += 2
      }
  }
  return result
};

nums = [4,2,5,7]
console.log(sortArrayByParityII(nums));