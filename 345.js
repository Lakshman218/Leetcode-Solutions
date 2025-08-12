var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;

        [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
        left++;
        right--;
    }
    return arr.join('');
};

const s = "IceCreAm"
console.log(reverseVowels(s));