var percentageLetter = function(s, letter) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) {
            count++;
        }
    }

    return Math.floor((count / s.length) * 100);
};

const s = "foobar", letter = "o"
console.log(percentageLetter(s, letter));