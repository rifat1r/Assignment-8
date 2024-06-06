import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
    return (
        <div>
            <div className="bg-gray-200 w-full rounded-xl">
                <h2 className="text-2xl py-4">Books</h2>
            </div>
            
            <div role="tablist" className="tabs tabs-lifted mt-5">

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    
    <ReadBooks></ReadBooks>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList Books"  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <WishListBooks></WishListBooks>
  </div>

  
</div>
        </div>
    );
};

export default ListedBooks;