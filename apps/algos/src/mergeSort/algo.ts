/**
 * Sorts an array of numbers using the merge sort algorithm.
 * Merge sort is a divide-and-conquer algorithm that divides the array into halves,
 * sorts each half, and merges them back together.
 *
 * @param array The array of numbers to be sorted.
 * @returns A new array containing the sorted elements of the original array.
 */
export function mergeSort(array: number[]): number[] {
  // Calculate the midpoint of the array to divide it into two halves.
  const midPoint = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  // Using splice to remove the first half of the array. This mutates the original array
  const leftHalf = array.splice(0, midPoint);

  // After the splice operation above, array is mutated and now effectively represents the right half of the original array.
  const rightHalf = array;

  // Recursively sort both halves and merge them
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

/**
 * Merges two sorted arrays into a single sorted array.
 * It iteratively compares the smallest elements of each input array and
 * adds the smaller one to the result array until all elements are processed.
 *
 * @param leftHalf The first sorted array to merge.
 * @param rightHalf The second sorted array to merge.
 * @returns A new sorted array containing all elements from both input arrays.
 */
function merge(leftHalf: number[], rightHalf: number[]): number[] {
  let arr: number[] = [];

  // Break out of loop if any one of the array becomes empty
  while (leftHalf.length && rightHalf.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (leftHalf[0] < rightHalf[0]) {
      const element = leftHalf.shift();
      if (element !== undefined) arr.push(element);
    } else {
      const element = rightHalf.shift();
      if (element !== undefined) arr.push(element);
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...leftHalf, ...rightHalf];
}
