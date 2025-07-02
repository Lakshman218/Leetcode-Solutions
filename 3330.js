var possibleStringCount = function(word) {
    let count = 1; 
    let i = 0;

    while (i < word.length) {
        let j = i;

        while (j < word.length && word[j] === word[i]) {
            j++;
        }

        const groupLength = j - i;

        if (groupLength > 1) {
            count += (groupLength - 1);
        }

        i = j; 
    }

    return count;
};

const word = "abbcccc";
const result = possibleStringCount(word);
console.log(result);