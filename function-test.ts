import addNumbers, {combineString, printFormat, fetchData, createName, Name, helper } from "./function";

/** 
* Lecture 1-3 Practice
*/

console.log(addNumbers(2, 3));

console.log(combineString("test", "test"))

printFormat("hey", 9);

console.log(fetchData("url.com"))

const name: Name = {
    first: "Joe",
    last: "Smith"
}
console.log(createName(name))

console.log(helper([1,2,3], (v) => v + 100));


/**
  * Lecture 4 Practice
*/