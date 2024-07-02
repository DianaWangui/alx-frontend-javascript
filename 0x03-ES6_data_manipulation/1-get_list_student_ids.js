// More mapping

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const newArr = arr.map((i) => i.id);
  return newArr;
}
