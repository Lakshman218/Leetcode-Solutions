var resultArray = function(nums) {
  let arr1=[nums[0]]
  let arr2 = [nums[1]]
  for(let i = 2;i<nums.length;i++){
      let arr1L = arr1.length
      let arr2L=arr2.length
      if(arr1[arr1L-1]>arr2[arr2L-1]){
          arr1.push(nums[i])
      }else{
          arr2.push(nums[i])
      }
  }
  return [...arr1,...arr2]
};

nums = [5,4,3,8]
console.log(resultArray(nums));