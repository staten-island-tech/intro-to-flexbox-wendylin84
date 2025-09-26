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
/* 
function enterCastle(hasKey, hasMagic, isBanned) {
  if ((hasKey === true || hasMagic) && !isBanned) {
    console.log("can enter castle");
  } else {
    console.log("cannot enter");
  }
}
enterCastle(true, true, true);
 */
function middle(x, y, z) {
  if ((x >= y && x <= z) || (x >= z && x <= y)) {
    console.log(x);
  }
  if ((y >= x && y <= z) || (y >= z && y <= y)) {
    console.log(y);
  } else {
    console.log(z);
  }
}
middle(10, 5, 8);

function phone(a, b, c, d) {
  if ((a === 8 || a === 9) && b === c && (d === 8 || d === 9)) {
    console.log("ignore");
  } else {
    console.log("answer");
  }
}
phone(9, 6, 6, 8);
