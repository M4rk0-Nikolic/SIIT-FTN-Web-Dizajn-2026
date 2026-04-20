import Bookcard from "./Bookcard";
import "../css/Bookcatalog.css";
import { getBooks, getBooksWithAuthors } from "../services/api.js"

function SearchBar(){
    
    return (
        <div className="search-bar">
            <input type="text" placeholder="Potrazi knjigu..."/>
        </div>
    );
}

function BookCatalog(){
    return(
        <div className="book-grid">
            {getBooks().map((book) => (
                <Bookcard key={book.id} book={book} />
            ))}
        </div>
    );
}




export default BookCatalog;