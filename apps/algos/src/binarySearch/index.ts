import { generateInput, randomIndex } from "../helpers";
import { mergeSort } from "../mergeSort/algo";
import { binarySearch } from "./algo";

const input = mergeSort(generateInput(0, 10));
const key = randomIndex(input);
console.log({ input, key, index: binarySearch(input, key) });
