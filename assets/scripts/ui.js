'use strict';

const onSuccess = function (data) {
  console.table(data.books);
  let everyBook = "<br>Here is your book collection:<br>";
for(let i=0; i< data.books.length; i++){
  everyBook += "<br>" + data.books[i].id + ". <b>"  + data.books[i].title + "</b> by <i>" + data.books[i].author + "</i>";
}

document.getElementById('answer').innerHTML = everyBook;
};

const singleBook = function (data) {
let number = $('#book-number').val();
if(data.books[number] === undefined) {
  document.getElementById('answer').innerHTML = "I'm sorry, I need a number between 1-168.";
} else {
document.getElementById('answer').innerHTML = "<br>The book you selected is <b>" + data.books[number-1].title + "</b> by <i>" + data.books[number-1].author + "</i>";
}
};

module.exports = {
  onSuccess,
  singleBook
};
