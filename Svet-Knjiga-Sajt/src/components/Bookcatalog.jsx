import { useState, useEffect } from "react";
import Bookcard from "./Bookcard";
import "../css/Bookcatalog.css";
import { getBooks, getBooksWithAuthors } from "../services/api.js"
import searchIcon from "../assets/search.svg";

function SearchBar({ search, setSearch }) {
    return (
        <div className="search-bar">
            <div className="search-input-wrap">
                <img src={searchIcon} width="34" height="35" alt="Search Icon" />
                <input type="text" placeholder="Potrazi knjigu po zanru... po naslovu..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>
    );
}

function BookCatalog(){
    const [search, setSearch] = useState("");

    return(
        <div className="book-catalog" id="book-catalog">
        <h2>Katalog knjiga</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <div className="book-grid">
            {getBooksWithAuthors().map((book) => (
                (book.title.toLowerCase().includes(search.toLowerCase()) || book.genre.toLowerCase().includes(search.toLowerCase())) && <Bookcard key={book.id} book={book} />
            ))}
        </div>
        </div>
    );
}




export default BookCatalog;