var largestGoodInteger = function (num) {
  let largestInteger = "";
  for (let i = 2; i < num.length; i++) {
      if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
          const subString = num[i].repeat(3);
          if (subString > largestInteger) {
              largestInteger = subString;
          }
      }
  }
  return largestInteger;
};

let num = "6777133339"
console.log(largestGoodInteger(num));