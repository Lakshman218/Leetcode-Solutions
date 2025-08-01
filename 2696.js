var minLength = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const last = stack[stack.length - 1];

        if ((last === 'A' && curr === 'B') || (last === 'C' && curr === 'D')) {
            stack.pop(); 
        } else {
            stack.push(curr);
        }
    }

    return stack.length;
};

const s = "ABFCACDB"

console.log(minLength(s))