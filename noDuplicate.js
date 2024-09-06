let names = ["tonmoy", "meghla", "sagor", "tonmoy", "akash", "meghla"];
function noDuplicate(arr) {
  // console.log(arr);
  const uniq = [];
  for (const items of arr) {
    if (uniq.includes(items) === false) {
      uniq.push(items);
    }
  }
  return uniq;
}

const duplicate = noDuplicate(names);
console.log(duplicate);
