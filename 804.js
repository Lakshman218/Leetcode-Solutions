var uniqueMorseRepresentations = function(words) {
  let morseCode = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}
let currIndex = ''
for(let i=0; i<words.length; i++) {
  let currlength = words[i].length
  for(let j=0; j<currlength; j++) {
      currIndex += morseCode[words[i] [j]]
  }
  words[i] = currIndex
  currIndex = ''
}
return new Set(words).size
};

words = ["gin","zen","gig","msg"]
console.log(uniqueMorseRepresentations(words));