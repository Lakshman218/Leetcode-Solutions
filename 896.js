var isMonotonic = function(nums) {
  let incMono=true,decMono=true
  let a = nums.toSorted((a,b)=>a-b)
  for(i=0;i<nums.length;i++){
      if(a[i]!=nums[i] && incMono){
          incMono=false
      }
      if(a[nums.length-1-i]!=nums[i] && decMono){
          decMono=false
      }
      if(!decMono && !incMono){
          break
      }
  }
  return incMono || decMono
};
nums = [1,2,2,3]
console.log(isMonotonic(nums));