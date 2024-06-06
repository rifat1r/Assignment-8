import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-gray-200 rounded-xl flex justify-between px-20">
            <div className="my-auto pl-20">
                <h2 className="text-4xl font-bold mb-4">Books to freshen up <br /> your bookshelf</h2>
                <Link to='/listedBooks'>
                <button className="btn btn-success text-white mt-4 bg-green-500 border-none">View The List</button>
                </Link>
            </div>
            <div className="p-20">
                <img src="https://i.postimg.cc/BnxWXZ15/pngwing-1-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
