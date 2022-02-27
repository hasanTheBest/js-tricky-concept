// 1. example  - array method map
const squared = [1, 2, 3, 4, 5].map((num) => num * num);
// console.log(squared); // [1, 4, 9, 16, 25]

// 2. implementing map functions
function fn(item) {
  return Math.pow(item, 3);
}
function mapArrays(arr, fn) {
  const newArr = [];
  for (let item of arr) {
    newArr.push(fn(item));
  }

  return newArr;
}
const cubed = mapArrays([1, 2, 3, 4, 5], fn);
console.log(cubed);
