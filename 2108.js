var firstPalindrome = function(words) {
  function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

for (let i = 0; i < words.length; i++) {
  if (isPalindrome(words[i])) {
    return words[i];
  }
}
return "";
};

let words = ["abc","car","ada","racecar","cool"]
const result = firstPalindrome(words)
console.log(result);