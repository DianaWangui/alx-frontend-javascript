// Reduce

export default function getStudentIdsSum(getListStudents) {
  const idSum = getListStudents.reduce((accumulator, currentStd) => accumulator + currentStd.id,
    0);

  return idSum;
}
