/* Create a function getStudentIdsSum
   Should accept students' list */
export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((prev, { id }) => prev + id, 0);
}
