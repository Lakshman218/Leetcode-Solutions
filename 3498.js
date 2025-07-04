var reverseDegree = function(s) {
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const reverseValue = 26 - (char.charCodeAt(0) - 'a'.charCodeAt(0));
        const positionInString = i + 1; // 1-indexed
        total += reverseValue * positionInString;
    }

    return total;
};

const s = "abc";
const result = reverseDegree(s);
console.log(result);