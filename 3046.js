var isPossibleToSplit = function(nums) {
  if (nums.length % 2 !== 0) {
      return false; 
  }

  let nums1 = [];
  let nums2 = [];

  for (let num of nums) {
      if (!nums1.includes(num)) {
          nums1.push(num);
      } else if (!nums2.includes(num)) {
          nums2.push(num);
      } else {
          return false; 
      }
  }
  return true;
};

let nums = [1,1,2,2,3,4]
console.log(isPossibleToSplit(nums));