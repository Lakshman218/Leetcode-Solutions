var fibGenerator = function*() {
  var n1 = 0;
  var n2 = 1;
  while (true) {
    yield n1;
    var n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
