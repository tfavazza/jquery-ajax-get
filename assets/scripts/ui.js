'use strict';

const onSuccess = function (data) {
  //console.table(data.books);
  let everyBook = "<br>Here is your book collection:<br>";
for(let i=0; i< data.books.length; i++){
  everyBook += "<br>" + data.books[i].id + ". <b>"  + data.books[i].title + "</b> by <i>" +
  data.books[i].author + "</i>";
  }
  document.getElementById('answer').innerHTML = everyBook;
};

const singleBook = function (data) {
  //console.log(data.book);
  document.getElementById('answer').innerHTML = "<br>The book you selected is <b>" +
  data.book.title + "</b> by <i>" + data.book.author + "</i>";
};

module.exports = {
  onSuccess,
  singleBook
};
