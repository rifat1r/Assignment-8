const getStoredBooksId = () => {
    const readBook = localStorage.getItem('read-books');
    if(readBook){
        return JSON.parse(readBook)
    }
    return [];
}

const saveBooks = (id) => {
  const readBooks = getStoredBooksId();
  const exists = readBooks.find(bookId => bookId=== id);
  if(!exists) {
    readBooks.push(id);
    localStorage.setItem('read-books',JSON.stringify(readBooks));
  }
}
export {getStoredBooksId,saveBooks}