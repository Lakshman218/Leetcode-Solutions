var sortArray = function(nums) {
  if(nums.length < 2) {
  return nums
}
const mid = Math.floor(nums.length/2)
const leftarr = nums.slice(0,mid)
const rightarr = nums.slice(mid)
return merge(sortArray(leftarr), sortArray(rightarr))
};
function merge(leftarr, rightarr) {
const sortedarr = []
while(leftarr.length && rightarr.length) {
  if(leftarr[0] <= rightarr[0]) {
    sortedarr.push(leftarr.shift())
  } else {
    sortedarr.push(rightarr.shift())
  }
}
return [...sortedarr, ...leftarr, ...rightarr]
}

let nums = [5,2,3,1]
const result = sortArray(nums)
console.log(result);