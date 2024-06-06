import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksId } from "../../LocalStorage";
import WishListBook from "../WishListBook/WishListBook";
import { getStoredBooksId2 } from "../../../LocalStorage2";

const WishListBooks = () => {
    const books = useLoaderData();
    const [wishListBooks,setWishListBooks] = useState([]);
    useEffect(()=> {
        const readBookIds = getStoredBooksId();
        const bookIds = getStoredBooksId2();
        const hasCommon = readBookIds.some(element => bookIds.includes(element));
        if(!hasCommon){
            const wishListBooks = [];
            for(const bookId of bookIds){
                const book = books.find(book => book.id === bookId)
                if(book){
                    wishListBooks.push(book)
                }
            }
            setWishListBooks(wishListBooks)
        }
    },[books])
    return (
        <div className="py-5">
            {
              wishListBooks.map(book => <WishListBook key={book.id} book={book}></WishListBook>)
            }
        </div>
    );
};

export default WishListBooks;