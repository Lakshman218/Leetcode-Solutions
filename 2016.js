var maximumDifference = function(nums) {
    let minSoFar = nums[0];
    let maxDiff = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minSoFar) {
            maxDiff = Math.max(maxDiff, nums[i] - minSoFar);
        } else {
            minSoFar = nums[i];
        }
    }
    return maxDiff;
};

const nums = [7,1,5,4];
console.log(maximumDifference(nums));