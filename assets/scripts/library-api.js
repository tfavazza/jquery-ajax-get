'use strict';

const getBooks = function() {
  let number = $('#book-number').val();
  let myUrl = 'http://localhost:3000/books/';
  if(number){
  myUrl = 'http://localhost:3000/books/' + number;
}
  return $.ajax({
    url: myUrl,
    method: 'GET'
  });
};
module.exports = {
  getBooks,
};
