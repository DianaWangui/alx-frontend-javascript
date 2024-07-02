// Clean Set
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const reminder = value.substring(startString.length);
      result += `${reminder}-`;
    }
  }

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}