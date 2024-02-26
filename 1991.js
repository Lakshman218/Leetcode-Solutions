var findMiddleIndex = function(nums) {
  let total = 0;
  for(let i=0; i<nums.length; i++){
      total += nums[i];
  }
  let left = 0;
  for(let i=0; i<nums.length; i++){
      if(left * 2 === total - nums[i]){
          return i;
      }
      left += nums[i]
  }
  return -1;
};

let nums = [2,3,-1,8,4]
const result = findMiddleIndex(nums)
console.log(result);