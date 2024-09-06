function oddAverage(num) {
  console.log(num);
  let odds = [];
  for (const number of num) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  let sum = 0;
  for (const number of num) {
    sum += number;
  }
  const count = odds.length;
  console.log(odds, "Number are: ", count);
  const Avg = sum / count;
  return Avg;
}

const numbers = [2, 5, 7, 9, 41, 6, 11, 42, 56, 23];
const value = oddAverage(numbers);
console.log("The average number is: ", value);
