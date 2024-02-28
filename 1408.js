var stringMatching = function(words) {
  return words.filter((word, index) => 
     words.some((otherword, otherindex) => index !== otherindex && otherword.includes(word))
  )
};

let words = ["mass","as","hero","superhero"]
const result = stringMatching(words)
console.log(result);