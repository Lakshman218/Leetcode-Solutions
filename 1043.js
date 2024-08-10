var maxSumAfterPartitioning = function(arr, k) {
  let n = arr.length;
  let dp = new Array(n).fill(0);
  for(let i=0; i<n; i++) {
      let maxVal = 0
      for (let j = i; j >= Math.max(0, i - k + 1); j--) {
          maxVal = Math.max(maxVal, arr[j]);
          dp[i] = Math.max(dp[i], (j > 0 ? dp[j - 1] : 0) + maxVal * (i - j + 1));
      }
  }
  return dp[n - 1];
};

arr = [1,15,7,9,2,5,10], k = 3
console.log(maxSumAfterPartitioning(arr, k));