import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCatalog from "../components/Bookcatalog";
import Bookcard from "../components/Bookcard";
import { useState, useEffect } from "react";
import { useLoggedInContext } from "../contexts/Loggedin.jsx";
import addIcon from "../assets/add.svg";
import "../css/AdminBooks.css";
import { getAuthors, getNumberOfBooksAuthors } from "../services/api.js";

function AdminBooks() {

    const { loggedIn, setLoggedIn, isLoggedIn } = useLoggedInContext();
    const authors = getAuthors();

    const [ clicked, setClicked ] = useState(false);

    const removeBook = () => {
        setClicked(!clicked);
        const result = confirm("Da li ste sigurni da zelite da obrisete ovu knjigu?");
        if (result) {
            
        }
    }

    const [numBooks, numAuthors ] = getNumberOfBooksAuthors();

    return (<>
        <Navbar />
        <div className="admin-header">
        <h2>Admin panela</h2>
        <p>Dodavanjem Knjiga se radi ispod, a za brisanje se samo kilikne na knjigu u katalogu</p>
        </div>
        <div className="add-book">
        <form className="main-form">
        <input type="text" placeholder="Naslov knjige" />
        <input type="text" placeholder="Zanr knjige" />
        <select>
            {authors.map((author) => (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
            ))}
        </select>
        <button type="submit">Dodaj Knjigu</button>
        </form>
        <div>
        <p>Broj Knjiga<br/>{numBooks}</p>
        </div>
        <div>
        <p>Broj Autora<br/>{numAuthors}</p>
        </div>
        </div>
        <div className="admin">
        <BookCatalog onClick={removeBook} />
        </div>
        <Footer />
        </>        
    );
}



export default AdminBooks;