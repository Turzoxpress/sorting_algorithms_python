function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  left = arr.slice(0, mid);
  right = arr.slice(mid);

  return merge_two_sorted_lists(merge_sort(left), merge_sort(right));
}

function merge_two_sorted_lists(a, b) {
  let i = 0;
  let j = 0;
  let arr = [];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    arr.push(a[i]);
    i++;
    k++;
  }

  while (j < b.length) {
    arr.push(b[j]);
    j++;
  }
  return arr;
}

let elements = [5, 9, 2, 1, 67, 34, 88, 34];
console.log("Sorted array : ");
console.log(merge_sort(elements));
