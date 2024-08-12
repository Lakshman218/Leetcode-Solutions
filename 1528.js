var restoreString = function(s, indices) {
  let newArr = new Array(indices.length);
  for (let i = 0; i < s.length; i++) {
      newArr[indices[i]] = s[i];
  }
  let restoredString = newArr.join('');
  return restoredString
};

s = "codeleet", indices = [4,5,6,7,0,2,1,3]
console.log(restoreString(s,indices));