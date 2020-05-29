const arr  = [1, 4, 6, 7, 8, 1];

let found;
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] && arr[j] && arr[i] === arr[j]) {
      found = arr[j];
      break
    }
  }
  if (found) {
    break;
  }
}

console.log(found)
