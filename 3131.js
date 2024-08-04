var addedInteger = function(nums1, nums2) {
  return Math.max(...nums2)-Math.max(...nums1)
};

nums1 = [2,6,4], nums2 = [9,7,5]
console.log(addedInteger(nums1, nums2));