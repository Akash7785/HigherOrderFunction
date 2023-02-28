let num = [1, 3, 6, 9, 5, 2, 4];

// let res = num.filter(function (ele) {
//   return ele % 2 == 1;
// });
// console.log(res);

// Sum of cubes

let isOdd = function (ele) {
  return ele % 3 == 0;
};

let cube = function (acc, ele) {
  return acc + ele * ele * ele;
};

// let res = num.filter();

let out = num.filter(isOdd).reduce(cube, 0);

console.log(out);
