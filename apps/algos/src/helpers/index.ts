/**
 * generate a number[]
 * @param min
 * @param max
 * @returns a `number[]` of length > min < max
 */
export function generateInput(min: number = 0, max: number): number[] {
  const output: number[] = [];
  while (output.length < max) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    output.push(randomNumber);
  }
  return output;
}
