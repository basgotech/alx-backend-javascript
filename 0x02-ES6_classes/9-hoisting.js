/**
 * Represents a HolbertonClass with a specific year and location.
 */
export class HolbertonClass {
  /**
   * Constructs a new HolbertonClass object.
   * @param {Number} year - The year of the Holberton class.
   * @param {String} location - The location of the Holberton class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Getter for the year of the Holberton class.
   * @returns {Number} The year of the Holberton class.
   */
  get year() {
    return this._year;
  }

  /**
   * Getter for the location of the Holberton class.
   * @returns {String} The location of the Holberton class.
   */
  get location() {
    return this._location;
  }
}

/**
 * Represents a student enrolled in Holberton School.
 */
export class StudentHolberton {
  /**
   * Constructs a new StudentHolberton object.
   * @param {String} firstName - The first name of the student.
   * @param {String} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The HolbertonClass instance the student belongs to.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Getter for the full name of the student.
   * @returns {String} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter for the HolbertonClass instance the student belongs to.
   * @returns {HolbertonClass} The HolbertonClass instance.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Getter for the full description of the student including name, year, and location.
   * @returns {String} The full student description.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of HolbertonClass and StudentHolberton
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Array of students
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
