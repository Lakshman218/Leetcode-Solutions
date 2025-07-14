var rearrangeCharacters = function(s, target) {
    const sCount = {};
    const targetCount = {};

    for (let char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }

    for (let char of target) {
        targetCount[char] = (targetCount[char] || 0) + 1;
    }

    let minCopies = Infinity;
    for (let char in targetCount) {
        const available = sCount[char] || 0;
        minCopies = Math.min(minCopies, Math.floor(available / targetCount[char]));
    }

    return minCopies;
};

s = "ilovecodingonleetcode", target = "code"
console.log(rearrangeCharacters(s, target));