var rotateString = function(s, goal) {
  let sarray = s+s
  if(s.length !== goal.length) return false
  return sarray.includes(goal) ? true : false
};

let s = "abcde", goal = "cdeab"
const result = rotateString(s,goal)
console.log(result);