var distributeCandies = function(candyType) {
    const uniqueTypes = new Set(candyType).size;  
    const maxAllowed = candyType.length / 2;      
    return Math.min(uniqueTypes, maxAllowed); 
};

const candyType = [1,1,2,2,3,3]
console.log(distributeCandies(candyType));