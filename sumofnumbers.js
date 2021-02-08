const numbers = [1, 2, 3, 4, 5];
function sumFor(number) {
  let sum = 0;
  for (const integer of number) {
    sum += integer;
  }
  return sum;
}

function sumWhile(number) {
  let count = 0;
  let sum = 0;
  while (count < number.length) {
    sum += number[count];
    count++;
  }
  return sum;
}

function sumRecursion(number) {
  if (number.length === 0) {
    return 0;
  }
  return sumRecursion(_.rest(number)) + number[0];
}

function sumTheSimpleWay(number) {
  return _.reduce(number, (memo, num) => memo + num);
}
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
