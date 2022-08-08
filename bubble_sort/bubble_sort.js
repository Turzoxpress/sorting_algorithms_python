const bubble_sort_algorithm = (arr) => {
  console.log("Given array : ");
  console.log(arr);

  let size = arr.length - 1;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log("Sorted array : ");
  console.log(arr);
};

bubble_sort_algorithm([45, 3, -1, 63, 2, 3, 87, 1, 200]);
