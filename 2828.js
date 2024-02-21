
var isAcronym = function(words, s) {
  return s === words.map((word) => word[0]).join("")
};

const words = ["alice","bob","charlie"], s = "abc"
const result = isAcronym(words,s)
console.log(result());