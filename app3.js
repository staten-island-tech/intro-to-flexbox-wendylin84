/* const students = ["Alice", "Bob", "Charlie", "Davic" /* , 1, null, X, true]; */
/* students.push("Noah");
console.log(students); */
/* console.log(students[0]);
 */
/* function printAll(list){
    for (let i = 0; < students.length; i++){
        console.log(i)
        console.log(list[i]);
    }
}
printAll(students); */
// students.forEach((student) => console.log(student, index));
/* function add1(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;
 */

/* console.log(students.find((student) => student === "Alice")); */
/* const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbs.filter((numba) => numba % 2 === 0).forEach((numba) => console.log(numba));
 */
/* let number = 5;
while (number > 0) {
    console.log("coundown: " + number); */

/* const name = "Alice";
console.log(name[0]);
 */
const sentence =
  "The red cat sat on the mat., Why are you so sad cat?, Don't ask that";
function lang(sentence) {
  let s = 0;
  let t = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "S" || sentence[i] === "s") {
      s++;
    }
    if (sentence[i] === "T" || sentence[i] === "t") {
      t++;
    }
  }
  if (s > t) {
    console.log("French");
  }
  if (t > s) {
    console.log("English");
  }
}
lang(sentence);

function parking(x, y) {
  let c = 0;
  for (let i = 0; i < x.length && y.length; i++) {
    console.log(x[i], y[i]);
    if (x[i] === "c" || y[i] === "c") {
      c++;
    }
  }
}
parking("CC..C", ".CC..");
