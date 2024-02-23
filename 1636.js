
var frequencySort = function (nums) {
  const frequencyMap = new Map() // Create a frequency map to store the count of each number
  for(const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1 )
  }

  nums.sort((a,b)=>{  // Sort the array based on frequency and value
    // Compare frequencies first
    const freqA = frequencyMap.get(a)
    const freqB = frequencyMap.get(b)
    if(freqA === freqB) { // If frequencies are the same, sort in decreasing order of values
      return b-a
    }
    return freqA - freqB // Sort in increasing order of frequencies..
  })

  return nums
}

const nums = [1, 1, 2, 2, 2, 3];
const result = frequencySort(nums);
console.log(result);