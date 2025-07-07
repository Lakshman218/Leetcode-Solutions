var getLucky = function(s, k) {
    // Step 1: Convert each letter to its alphabetical position and join into a string
    let numStr = "";
    for (let char of s) {
        numStr += char.charCodeAt(0) - 96; // 'a' is 97 in ASCII
    }

    // Step 2: Repeat the digit sum process k times
    while (k > 0) {
        let sum = 0;
        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        numStr = sum.toString();
        k--;
    }

    return parseInt(numStr);
};

getLucky("leetcode", 2)