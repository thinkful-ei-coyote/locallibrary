const findAuthorById = (authors, id) => authors.find((author) => author.id == id) 

function findBookById(books, id) {
  return books.find((book)=> book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    const[borrowed, returned] = acc
    const recent = book.borrows[0] 
    if (recent.returned) returned.push(book)
     else borrowed.push(book)
    return acc
  }, [[], []])
}

function getBorrowersForBook(book, accounts) {
  //iterate over the accounts array to pull ids
  const idsByAccount = accounts.reduce((acc, account) => {
    acc[account.id] = account
    return acc
  }, {})
  // look at borrows to match account ids
  return book.borrows.map(({id, returned}) => ({
    ...idsByAccount[id],
    }) ).slice(0,10)
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
