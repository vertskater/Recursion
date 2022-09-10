"use strict";
//with Array
function fib(n) {
  if (n == 1) return [0, 1];
  const arr = fib(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

//without Array
function fib2(n, test = []) {
  if (n < 2) {
    return test.push(n);
  } else {
    return fib2(n - 1) + fib2(n - 2);
  }
}

//mergesort
/**
 *
 * @param {Array} arr
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, half);
  const arr2 = arr.slice(half, arr.length);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns
 */
function merge(arr1, arr2) {
  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return [...result, ...arr1, ...arr2];
}

console.log(mergeSort([3, 1, 6, 2, 5, 4]));
console.log(mergeSort([10, 1, 3, 6, 2, 5, 7, 4, 9, 8]));
