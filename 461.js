var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let count = 0;
    while (xor > 0) {
        count += xor & 1; 
        xor >>= 1;        
    }
    return count;
};

const x = 1, y = 4;
console.log(hammingDistance(x, y));