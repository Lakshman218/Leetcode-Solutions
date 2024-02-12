let nums = [2,5,1,3,4,7], n = 3

var shuffle = function(nums, n) {
  const arr=[];
  for(let i = 0;i< n;i++){
      arr.push(nums[i],nums[n+i]);
  }
  return arr
};

let shuffledArray = shuffle(nums,n)

console.log(shuffledArray);