const list = "A, 3, B A, C B, D A";
function wizard(list) {
  let s = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "c") {
      s++;
    }
  }
  console.log(s);
}
