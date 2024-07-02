// More set data structure

export default function hasValuesFromArray(set, array) {
  for (const i in array) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
