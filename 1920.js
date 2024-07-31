var buildArray = function(nums) {
  return nums.map((num) => nums[num])
};

nums = [0,2,1,5,3,4]
console.log(buildArray(nums));