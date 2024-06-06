import { useLoaderData } from "react-router-dom";
import { getStoredBooksId } from "../../LocalStorage";
import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import Book from "../book/Book";

const ReadBooks = () => {
    
    const books = useLoaderData();
    const [readBooks,setReadbooks] = useState([]);
    useEffect(()=>{
        const storedReadBooksId = getStoredBooksId();
        if(books.length > 0){
         const readBooks = [];
         for(const bookId of storedReadBooksId){
            const book = books.find(book => book.id === bookId);
            if(book){
                readBooks.push(book);
            }
         }
         setReadbooks(readBooks);
        }
    },[books])

    return (
        <div className="py-5">
            {
                readBooks.map(readBook => <ReadBook key={readBook.id} readBook={readBook}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;