import { useEffect, useState } from "react";
import Book from "../book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-5">Books</h2>
            <div className="grid grid-cols-3 gap-6">
               {
                books.map(book => <Book key={book.id} book={book}></Book>)
               }
            </div>
        </div> 
    );
};

export default Books;