var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let seen = new Set();
        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) break; // Stop if it's not a vowel
            seen.add(word[j]);
            if (seen.size === 5) count++;
        }
    }

    return count;
};

word = "aeiouu"
console.log(countVowelSubstrings(word));