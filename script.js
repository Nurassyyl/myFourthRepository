const books = document.querySelectorAll(".book");
const body = document.body;
const title2 = books[4].querySelector("a");
const title6 = books[2].querySelector("a");
const adv = document.querySelector(".adv");
const booksLists2 = books[0].querySelectorAll("li");
const booksLists5 = books[5].querySelectorAll("li");
books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);
body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";
title2.textContent = "Книга 3. this и Прототипы Объектов"
adv.style.display = "none";
booksLists2[3].after(booksLists2[6]);
booksLists2[8].after(booksLists2[4])
booksLists2[4].after(booksLists2[5])

booksLists5[2].before(booksLists5[9])
booksLists5[4].after(booksLists5[2])

title6.textContent = "Книга 6. ES6 и не только Глава 8: За пределами ES6";
