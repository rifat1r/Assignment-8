import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksId } from "../../LocalStorage";
import { getStoredBooksId2 } from "../../../LocalStorage2";
import WishListBook from "../WishListBook/WishListBook";

const WishListBooks = () => {
    const books = useLoaderData();
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const readBookIds = getStoredBooksId();
        const bookIds = getStoredBooksId2();

        if (books.length > 0) {
           const filteredWishlistBooks = bookIds
           .filter(bookId => (!readBookIds.includes(bookId)) )
           .map(bookId => books.find(book => book.id === bookId));
           setWishListBooks(filteredWishlistBooks);
        }
       
    }, [books]);

    return (
        <div className="py-5">
            {wishListBooks.map(book => (
                <WishListBook key={book.id} book={book} />
            ))}
        </div>
    );
};

export default WishListBooks;
