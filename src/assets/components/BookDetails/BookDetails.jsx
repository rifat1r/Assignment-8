import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../../LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks2 } from "../../../LocalStorage2";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    console.log(book);

    const handleReadBooks = () => {
        saveBooks(idInt);
        toast('Successfully added to read booklist')
    }
    const handleWishListBooks = () => {
        saveBooks2(idInt);
        toast('Successfully added to Wishlist')
    }
    return (
        <div className="md:flex gap-5">
            <div className="bg-gray-200 flex justify-center items-center w-1/2 rounded-2xl py-20 flex-1 ">
                <img className="w-1/2" src={book.image} />
            </div>
            <div className="w-1/2 space-y-5 flex-1 ">
                <h2 className="text-3xl font-semibold text-left">{book.bookName}</h2>
                <p className="text-xl text-left">By: {book.author}</p>
                <hr />
                <p className="text-xl text-left">{book.category}</p>
                <hr />
                <p className="text-left"><span className="font-semibold">Review:</span> {book.review}</p>
                <div className="flex gap-5">
                <h3 className="text-2xl">Tag </h3>
    <div className="text-green-500 bg-green-50 rounded-full px-5 py-1 font-medium"> #
        {book.tags[0]}
    </div>
    <div className="text-green-500 bg-green-50 rounded-full  px-5 py-1 font-medium"> #
        {book.tags[1]}
    </div>
    </div>
    <hr />
    <div className="flex">
    <div className="text-left">
    <p>Number of Pages: </p>
    <p>Publisher: </p>
    <p>Year of Publishing: </p>
    <p>Rating: </p>
    </div>
    <div className="ml-12 text-left font-semibold">
    <p>{book.totalPages}</p>
    <p>{book.publisher}</p>
    <p>{book.yearOfPublishing}</p>
    <p>{book.rating}</p>
    </div>
    </div>
    <div className="text-left">
        <button onClick={handleReadBooks} className="btn btn-outline mr-5 ">Read</button>
        <button onClick={handleWishListBooks} className="btn btn-accent text-white">WishList</button>
    </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;