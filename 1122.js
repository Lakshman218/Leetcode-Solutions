var relativeSortArray = function(arr1, arr2) {
  let res1 = [];
  for(let i=0;i<arr2.length;i++){
      for(let j=0;j<arr1.length;j++){
          if(arr2[i] == arr1[j]){
              res1.push(arr1[j]);
              arr1.splice(j,1);
              j--;
          }
      }
  }
  arr1.sort((a, b)=>a-b);
  return [...res1, ...arr1];
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
const result = relativeSortArray(arr1, arr2)
console.log(result);