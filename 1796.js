var secondHighest = function (s) {
  let digits = []
  for (c of s) {
      if (!isNaN(c) && c !== '')
          digits.push(c)
  }

  let set = new Set(digits)
  digits = Array.from(set)
  digits.sort( (a,b) =>   b-a)

  if (digits.length > 1) {
      console.log(digits)
      return digits[1]
  }

  return -1
};

s = "dfa12321afd"
console.log(secondHighest(s));