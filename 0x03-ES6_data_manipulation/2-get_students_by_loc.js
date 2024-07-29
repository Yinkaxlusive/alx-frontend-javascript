// create a function getStudentsByLocation
// accepts getListStudents and city
export default function getStudentsByLocation(studentArray, city) {
  return studentArray.filter((x) => x.location === city);
}
