import { useState, useEffect } from "react";
import Bookcard from "./Bookcard";
import "../css/Bookcatalog.css";
import { getBooks, getBooksWithAuthors } from "../services/api.js"
import searchIcon from "../assets/search.svg";

function SearchBar({ search, setSearch }) {
    return (
        <div className="search-bar">
            <div className="search-input-wrap">
                <img src={searchIcon} width="35" height="35" alt="Search Icon" />
                <input type="text" placeholder="Potrazi knjigu po zanru... po naslovu..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>
    );
}

function BookCatalog(){
    const [search, setSearch] = useState("");

    function displayAllBooks() {
        return getBooksWithAuthors().map((book) => (
                (book.title.toLowerCase().includes(search.toLowerCase()) || book.genre.toLowerCase().includes(search.toLowerCase())) && <Bookcard key={book.id} book={book} />
            ));
    }

    return(
        <div className="book-catalog" id="book-catalog">
        <h2>Katalog knjiga</h2>
        <SearchBar search={search} setSearch={setSearch} />
        {(search !== "" && !displayAllBooks().some(Boolean)) && <p className="search-error">Nazalost, nemamo tu knjigu</p>}
        <div className="book-grid">
            {displayAllBooks()}
        </div>
        </div>
    );
}




export default BookCatalog;