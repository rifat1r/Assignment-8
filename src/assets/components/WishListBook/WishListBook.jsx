import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";

const WishListBook = ({book}) => {
    const {id,image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating} = book;
    return (
        <div className="border rounded-xl grid grid-cols-5 gap-5 my-4">
            <div className="bg-gray-200 rounded text-center p-5">
                <img className="" src={image} alt="" />
            </div>
            <div className="col-span-4 space-y-2 py-3">
                <h2 className="text-xl font-semibold text-left pt-2">{bookName}</h2>
                <p className=" text-left">By: {author}</p>
                <div className="flex gap-4">
                    <h2 className="text-xl">Tag</h2>
                <div className="text-green-500 bg-green-50 rounded-full px-5 py-1 font-medium"> 
        {tags[0]}
    </div>
    <div className="text-green-500 bg-green-50 rounded-full  px-5 py-1 font-medium"> 
        {tags[1]}
    </div>
    <div>
      <p className="flex items-center ">
        <CiLocationOn className="text-xl"></CiLocationOn>
        Year of publishing: {yearOfPublishing}
      </p>
      </div>
   </div>
   <div className="flex gap-4">
 <p className="flex items-center"><GoPeople></GoPeople> Publisher: {publisher}</p>
<p className="flex items-center"><MdOutlineFindInPage></MdOutlineFindInPage>
Pages: {totalPages}
</p>
   </div>
   <hr />
   <div className="flex gap-3">
    <div className="bg-blue-300 text-blue-500 rounded-full px-3 py-1">Category: {category}</div>
    <div className="bg-orange-200 text-orange-500 rounded-full px-3 py-1">Rating: {rating}</div>
    <Link to={`/book/${id}`}><div className="bg-green-600 text-white px-3 py-1 rounded-full">View Details</div></Link>
   </div>
            </div>
            
        </div>
    );
};

export default WishListBook;