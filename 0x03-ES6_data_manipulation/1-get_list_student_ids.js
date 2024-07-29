// create function getListStudentsIds
export default function getListStudentIds(arrStudents) {
  // confirm that the rg is an array
  if (!Array.isArray(arrStudents)) return [];
  return arrStudents.map((lst) => lst.id);
}
