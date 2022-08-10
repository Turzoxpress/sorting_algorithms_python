const insertion_sort = (arr) => {
  const size = arr.length - 1;
  for (let i = 0; i < size; i++) {
    let anchor = arr[i];
    let j = i - 1;
    while (j >= 0 && anchor < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = anchor;
  }
  return arr;
};

const elements = [5, 9, 2, 1, 67, 34, 88, 34];
console.log("Given Array : ");
console.log(elements);
console.log("Sorted Array : ");
console.log(insertion_sort(elements));
