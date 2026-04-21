import { useState, useEffect } from "react";
import Bookcard from "./Bookcard";
import "../css/Bookcatalog.css";
import { getBooks, getBooksWithAuthors } from "../services/api.js"

function SearchBar(){
    
    return (
        <div className="search-bar">
            <input type="text" placeholder="Potrazi knjigu po zanru... po naslovu..."/>
        </div>
    );
}

function BookCatalog(){
    const [books, setBooks] = useState([]);

    return(
        <div className="book-catalog" id="book-catalog">
        <h2>Katalog knjiga</h2>
        <SearchBar />
        <div className="book-grid">
            {getBooksWithAuthors().map((book) => (
                <Bookcard key={book.id} book={book} />
            ))}
        </div>
        </div>
    );
}




export default BookCatalog;