// const age = 18;
// const citizen = true;
// // 2 equals evaluates & ignores type
// //if 1 == "1"
// // 3 equals evaluates & compares type
// //if 1 === "1"
// // && and
// // || or
// // ! not
// if (age === true && citizen === true) {
//   console.log("can run for pres");
// }
/* if (age >= 18) {
  console.log("vote");
} else {
  console.log("no vote");
}

const temp = 32;
if (temp >= 212) {
  comsole.log("boiling");
} else if (temp <= 32) {
  console.log("frozem");
} else {
  console.log("water");
}
 */

function enterCastle(hasKey, hasMagic, isBanned) {
  if ((hasKey === true || hasMagic) && !isBanned) {
    console.log("can enter castle");
  } else {
    console.log("cannot enter");
  }
}
enterCastle(true, true, true);

function Medium