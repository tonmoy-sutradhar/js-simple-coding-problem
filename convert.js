function inchToFeet(num) {
  const feet = num / 12;
  return feet;
}
const value = inchToFeet(75);
console.log(value);

console.log("<<<--------------------------->>>");

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNum = parseInt(feetFraction);
  const feetRemaining = inch % 12;
  const result = feetFraction + " ft " + feetRemaining + " inch";
  return result;
}
const height = inchToFeet2(75);
console.log("This Man height is : ", height);

console.log("<<<--------------------------->>>");

// ---------------------------------------------->>

function mileToKilometer(mile) {
  const kilometer = mile * 1.609344;
  return kilometer;
}
const result = mileToKilometer(25);
console.log(result);
