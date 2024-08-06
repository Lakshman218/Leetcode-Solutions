var unequalTriplets = function(nums) {
  let count=0
  for(let i=0;i<nums.length;i++){
      let e1=nums[i]
      for(let j=i+1;j<nums.length;j++){
          let e2= nums[j]
          if(e1==e2) continue
          for(let k=j+1;k<nums.length;k++){
              let e3=nums[k]
              if(e1!==e3 && e2!==e3){
                  count++
              }
          }
      }
  }
  return count
};

nums = [4,4,2,4,3]
console.log(unequalTriplets(nums));