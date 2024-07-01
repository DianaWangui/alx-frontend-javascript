export default function concatArrays(array1, array2, string) {
// with this one:
  return [...array1, ...array2, ...string];
}
