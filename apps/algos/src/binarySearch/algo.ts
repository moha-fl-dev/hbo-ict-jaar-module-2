/**
 * Performs a binary search on a sorted array to find the index of a given key.
 *
 * @param sortedArray The array of numbers, sorted in ascending order, to search within.
 * @param key The number to search for within the sorted array.
 * @returns The index of the key within the sorted array if found; otherwise, returns -1 to indicate that the key is not present in the array.
 */
export function binarySearch(sortedArray: number[], key: number): number {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}
