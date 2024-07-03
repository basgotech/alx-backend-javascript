/**
 * get a list of student IDs from an arr.
 * @param {Array} students - The array of student objects.
 * @returns {Array} - The array of student IDs
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
