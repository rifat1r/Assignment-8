import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {id,image,tags,bookName,author,category,rating} = book;
    return (
        <Link to={`/book/${id}`}>
        <div className="card w-96 bg-base-100 shadow-xl border p-4 mt-5">
  <div className="bg-gray-200 rounded-xl  p-10">
  <figure><img src={image} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-left px-0 py-4 ">
    <div className="flex gap-5">
    <div className="text-green-500 bg-green-50 rounded-full px-5 py-1 font-medium">
        {tags[0]}
    </div>
    <div className="text-green-500 bg-green-50 rounded-full  px-5 py-1 font-medium">
        {tags[1]}
    </div>
    </div>
    <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
    <p>By: {author}</p>
    <div className="text-2xl text-gray-400 tracking-[.1em] ">----------------------------</div>
    <div className="card-actions flex justify-between">
      <h2 className="text-xl">{category}</h2>
      <h2 className="text-xl flex gap-2 items-center"><FaRegStar></FaRegStar> {rating}</h2>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;