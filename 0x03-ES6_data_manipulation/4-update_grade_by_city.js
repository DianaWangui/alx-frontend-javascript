// Combine

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const fileredArr = getListStudents.filter((student) => student.location === city);

  const updatedArr = fileredArr.map((arr) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === arr.id);

    if (matchedGrade) {
      return { ...arr, grade: matchedGrade.grade };
    }

    return { ...arr, grade: 'N/A' };
  });

  return updatedArr;
}
