const getStoredBooksId2 = () => {
    const readBook = localStorage.getItem('wishlist-books');
    if(readBook){
        return JSON.parse(readBook)
    }
    return [];
}

const saveBooks2 = (id) => {
  const readBooks = getStoredBooksId2();
  const exists = readBooks.find(bookId => bookId=== id);
  if(!exists) {
    readBooks.push(id);
    localStorage.setItem('wishlist-books',JSON.stringify(readBooks));
  }
}
export {getStoredBooksId2,saveBooks2}