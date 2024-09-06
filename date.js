const today = new Date();
// const date = new Date("9-7-2024");
console.log(today.getMonth());
console.log(today.getDay());

const specificDate = new Date(2020, 0, 29);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString("en-GB"));

// Second e convert
// Unix epoc use kore------------->>>
