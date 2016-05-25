'use strict';

 const libraryApi = require('./library-api');
 const ui = require('./ui');

const getBooksHandler = function (event) {
  event.preventDefault();
  let number = $('#book-number').val();
  if(number) {
   libraryApi.getBooks().done(ui.singleBook);
 } else {
  libraryApi.getBooks().done(ui.onSuccess);
}
};

// On document ready
$(() => {
  $('#get-books').on('click', getBooksHandler);
});
