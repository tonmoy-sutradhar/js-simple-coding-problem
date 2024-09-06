// Year will be leap year if the year divisible by 4;
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
    // console.log("This year is a leap year.");
    return true;
  }
  // else if (year % 400 === 0) {
  //   return true;
  // }
  else {
    // console.log("This year is not a leap year.");
    return false;
  }
}
const isLeap = leapYear(2043);
const isLeap2 = leapYear(2024);
console.log(isLeap, isLeap2);

console.log("<<<------------------------>>>");
