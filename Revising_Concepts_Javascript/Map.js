let arr = [1, 2, 3, 5, 6, 7, 8, 9];
let newArr = arr
  .map((item) => {
    return item * item;
  })
  .reduce((x, y) => {
    return x + y;
  });
console.log(newArr);
