function rotateLeft(arr, wantToRotate) {
  let n = arr.length;
  let m = 1;

  while (m <= wantToRotate) {
    let lastNumber = arr[0];

    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr[n - 1] = lastNumber;
    m++;
  }

  return arr;
}

const result = rotateLeft([1, 2, 3, 4, 5], 4);

console.log(result);
