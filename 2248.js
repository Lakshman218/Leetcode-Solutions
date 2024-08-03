var intersection = function(nums) {
  let commonSet = new Set(nums[0])
  for(let i=1; i<nums.length; i++) {
      let currentSet = new Set(nums[i])
      commonSet = new Set([...commonSet].filter(x => currentSet.has(x)))
  }
  return Array.from(commonSet).sort((a,b) => a-b)
};

nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
console.log(intersection(nums));