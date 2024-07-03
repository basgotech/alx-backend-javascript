/**
 * Function to get a list of students by location.
 * @param {Array} students - The array of student objects.
 * @param {String} city - The city to filter students by.
 * @returns {Array} - The array of students.
 */
export default function getStudentsByLocation(students, city) {
 if (students instanceof Array) {
   return students.filter((student) => student.location === city);
 }
 return [];
}
