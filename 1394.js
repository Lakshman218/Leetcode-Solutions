var findLucky = function(arr) {
    let count = {}
    let maxLucky = -1;
    for(let num of arr) {
        count[num] = (count[num] || 0) + 1
    }
    for(let num in count) {
         if(count[num] === Number(num)) {
            maxLucky = Math.max(maxLucky, Number(num))
        }
    } 
    return maxLucky
};

const arr = [2,2,3,4]
console.log(findLucky(arr))