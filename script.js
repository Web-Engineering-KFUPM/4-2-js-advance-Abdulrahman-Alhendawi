/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

class Student {
   constructor(firstName, lastName, gpa) {
   this.firstName = firstName;
   this.lastName = lastName;
   this._gpa = gpa;
}
get fullName() {
    return this.firstName + " " + this.lastName;
    }

get gpa() {
   return this._gpa;
}
set updateGpa(newGpa) {
   if(newGpa >= 0.0 && newGpa <= 4.0) {
      this._gpa = newGpa;
   } else {
      console.log("Invalid GPA");
   }
}
}

student1 = new Student("Abdulrahman", "Alhendawi", 3.83);

console.log(student1.fullName);
console.log(student1.gpa);
student1.updateGpa = 4.4;
console.log(student1.gpa)
student1.updateGpa = 3.32
console.log(student1.gpa)

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {ICS343 : "Computer Networks", SWE363 : "Web Development",SWE326 : "Software Testing"};
for (const key in courses) {
      console.log(key, courses[key]);
}
// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
let myName = "Abdulrahman";
console.log(myName.length);
console.log(myName.charAt(7));
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
let currentDate = new Date();
console.log(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear());
// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
let thisArray = [0,1,2,3,4,5,6,7,8,9];
let min = Math.min(...thisArray);
let max = Math.max(...thisArray);
console.log(min, max);
// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function getMax(...array) {
   try {
      if (array.length === 0) {
         throw new error (e);
      } 
      let max = Math.max(...array);
      return max;
      
   }
   catch (e) {
      console.log("There has been an error");
   }
   finally {
      console.log("Finished Excecution");
   }
}
let embtyArray = [];
getMax(...embtyArray);

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
