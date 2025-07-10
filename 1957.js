var makeFancyString = function(s) {
    let result = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count < 3) {
            result += s[i];
        }
    }

    return result;
};

s = "leeetcode"
const result = makeFancyString(s);
console.log(result);