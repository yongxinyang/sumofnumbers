const numbers = [2, 3, 4, 5, 6];

function sumFor(num) {
  let sum = 0;
  for (const int of num) {
    sum += int;
  }
  return sum;
}

function sumWhile(num) {
  let count = 0;
  let sum = 0;
  while (count < num.length) {
    sum += num[count];
    count++;
  }
  return sum;
}

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return sumRecursion(num.slice(1, num.length)) + num[0];
}

function sumTheSimpleWay(number) {
  return _.reduce(number, (memo, num) => memo + num, 0);
}
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
