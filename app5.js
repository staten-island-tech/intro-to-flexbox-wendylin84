// const list = "A, 3, B A, C B, D A";
// function wizard(list) {
//   let s = 0;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === "c") {
//       s++;
//     }
//   }
//   console.log(s);
// }

// const books = [
//   {
//     title: "The Silent Forest",
//     author: "Emily Harper",
//     year: 2015,
//     genre: "Fiction",
//     price: 12.99,
//     stock: 8,
//   },
//   {
//     title: "Digital Dreams",
//     author: "Michael Chen",
//     year: 2019,
//     genre: "Science Fiction",
//     price: 15.5,
//     stock: 12,
//   },
//   {
//     title: "Cooking with Love",
//     author: "Sophia Martinez",
//     year: 2020,
//     genre: "Cooking",
//     price: 22.0,
//     stock: 5,
//   },
//   {
//     title: "History of Time",
//     author: "Dr. Alan Stone",
//     year: 2010,
//     genre: "History",
//     price: 18.75,
//     stock: 7,
//   },
//   {
//     title: "Ocean Tales",
//     author: "Liam Carter",
//     year: 2018,
//     genre: "Adventure",
//     price: 11.99,
//     stock: 14,
//   },
//   {
//     title: "Mind Over Matter",
//     author: "Rachel Kim",
//     year: 2021,
//     genre: "Self-Help",
//     price: 14.25,
//     stock: 9,
//   },
//   {
//     title: "The Last Kingdom",
//     author: "David Johnson",
//     year: 2013,
//     genre: "Fantasy",
//     price: 16.4,
//     stock: 10,
//   },
//   {
//     title: "Code Masters",
//     author: "Olivia Brown",
//     year: 2022,
//     genre: "Technology",
//     price: 25.0,
//     stock: 6,
//   },
//   {
//     title: "Poetry of Stars",
//     author: "Noah Wilson",
//     year: 2017,
//     genre: "Poetry",
//     price: 9.99,
//     stock: 20,
//   },
//   {
//     title: "Secrets of the Mind",
//     author: "Hannah Lee",
//     year: 2016,
//     genre: "Psychology",
//     price: 19.99,
//     stock: 11,
//   },
//   {
//     title: "Into the Desert",
//     author: "Ethan White",
//     year: 2014,
//     genre: "Adventure",
//     price: 13.5,
//     stock: 13,
//   },
//   {
//     title: "World of Wonders",
//     author: "Charlotte Green",
//     year: 2023,
//     genre: "Science",
//     price: 27.8,
//     stock: 4,
//   },
//   {
//     title: "Legends Untold",
//     author: "Daniel Wright",
//     year: 2011,
//     genre: "Fantasy",
//     price: 15.2,
//     stock: 8,
//   },
//   {
//     title: "Journey to Space",
//     author: "Amelia Young",
//     year: 2020,
//     genre: "Science Fiction",
//     price: 21.0,
//     stock: 7,
//   },
//   {
//     title: "Life Lessons",
//     author: "Benjamin Scott",
//     year: 2019,
//     genre: "Non-Fiction",
//     price: 17.25,
//     stock: 15,
//   },
//   {
//     title: "Garden Magic",
//     author: "Isabella Adams",
//     year: 2012,
//     genre: "Lifestyle",
//     price: 12.0,
//     stock: 9,
//   },
//   {
//     title: "Haunted Nights",
//     author: "Lucas King",
//     year: 2021,
//     genre: "Horror",
//     price: 14.99,
//     stock: 8,
//   },
//   {
//     title: "Music of the Soul",
//     author: "Grace Baker",
//     year: 2017,
//     genre: "Music",
//     price: 23.5,
//     stock: 6,
//   },
//   {
//     title: "Ancient Civilizations",
//     author: "Christopher Hall",
//     year: 2010,
//     genre: "History",
//     price: 20.75,
//     stock: 10,
//   },
//   {
//     title: "Bright Futures",
//     author: "Natalie Moore",
//     year: 2022,
//     genre: "Education",
//     price: 18.0,
//     stock: 12,
//   },
// ];
// books.forEach((book) => console.log(book.title.book.author));
// books
//   .filter((book) => book.year < 2020)
//   .forEach((book) => console.log(book.title, book.year));

const btn = document.querySelector(".btn");
//console.log(btn);
// btn.addEventListener("click", function (event) {
//   //console.log(event, event.target);
// }
function getRGB() {
  const box = document.querySelector(".box");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // document
  //   .querySelector(".container")
  //   .insertAdjacentHTML("afterbegin", `<h1>rgb(${r}, ${g}, ${b})</h1>`);
  document.querySelector("h1").textContent = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", getRGB);
