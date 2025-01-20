// Remove duplicates
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[i]) 
          nums[++i] = nums[j];
  }
  return ++i;
};

console.log(removeDuplicates([1,1,2,3]));