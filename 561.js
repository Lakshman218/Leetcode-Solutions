let nums = [6,2,6,5,1,2]

var arrayPairSum = function(nums) {
  nums.sort((a,b) => a-b) 
  var sum = 0
  for(var i=0; i<nums.length; i+= 2) {
      sum += nums[i]
  }
  return sum
};

const result = arrayPairSum(nums)
console.log(result);