// Filter

export default function getStudentsByLocation(getListStudents, city) {
  const fileredArr = getListStudents.filter((student) => student.location === city);

  return fileredArr;
}
