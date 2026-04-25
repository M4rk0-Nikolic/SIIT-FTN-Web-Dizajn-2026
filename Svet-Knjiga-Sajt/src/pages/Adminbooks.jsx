import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCatalog from "../components/Bookcatalog";
import Bookcard from "../components/Bookcard";
import { useState, useEffect } from "react";
import { useLoggedInContext } from "../contexts/Loggedin.jsx";
import addIcon from "../assets/add.svg";
import "../css/AdminBooks.css";
import { getAuthors, getBooks, getNumberOfBooksAuthors } from "../services/api.js";

function AdminBooks() {

    const { loggedIn, setLoggedIn, isLoggedIn } = useLoggedInContext();
    const authors = getAuthors();

    const [ selected, setSelected ] = useState({});

    function isSelected() {
        if (Object.keys(selected).length === 0) {
            return false;
        }
        return true;
    }

    function selectBook(id) {
        console.log("Selected book id:", id, isSelected());
        if (!isSelected() || selected.id !== id) {
            for (const book of getBooks()) {
                if (book.id === id) {
                    setSelected(book);
                    return true;
                }
            setSelected(book);
            }
        } else{
            setSelected({});
        }
    }

    const removeBook = () => {
        setSelected(!clicked);
        const result = confirm("Da li ste sigurni da zelite da obrisete ovu knjigu?");
        if (result) {
            
        }
        alert("Knjiga je obrisana");
    }

    const [numBooks, numAuthors ] = getNumberOfBooksAuthors();

    return (<>
        <Navbar />
        <div className="admin-header">
        <h2>Admin panela</h2>
        <p>Dodavanjem Knjiga se radi ispod, a za brisanje se samo kilikitne na knjigu u katalogu i pojavice se njne podatke za izmenu ili brisanju</p>
        </div>
        <div className="add-book">
        <form key={selected.id ?? "new-book-form"} className="main-form">
        <div className="form-field">
        <label htmlFor="title">Naslov knjige</label>
        <input id="title" type="text" defaultValue={isSelected() ? selected.title : "Primer naslova knjige"} />
        </div>

        <div className="form-field">
        <label htmlFor="genre">Zanr knjige</label>
        <input id="genre" type="text" defaultValue={isSelected() ? selected.genre : "Fantastika"} />
        </div>

        <div className="form-field">
        <label htmlFor="imageUrl">URL slike knjige</label>
        <input id="imageUrl" type="url" defaultValue={isSelected() ? selected.images?.[0] : "https://example.com/book-cover.jpg"} />
        </div>

        <div className="form-field">
        <label htmlFor="format">Format knjige</label>
        <input id="format" type="text" defaultValue={isSelected() ? selected.format : "Tvrdi povez"} />
        </div>

        <div className="form-field">
        <label htmlFor="price">Cena knjige</label>
        <input id="price" type="number" defaultValue={isSelected() ? selected.price : 1299} />
        </div>

        <div className="form-field">
        <label htmlFor="pages">Broj strana knjige</label>
        <input id="pages" type="number" defaultValue={isSelected() ? selected.pages : 320} />
        </div>

        <div className="form-field">
        <label htmlFor="isbn">ISBN knjige</label>
        <input id="isbn" type="number" defaultValue={isSelected() ? selected.isbn : 9781234567890} />
        </div>

        <div className="form-field">
        <label htmlFor="author">Autor</label>
        <select id="author" defaultValue={isSelected() ? selected.authorId : (authors[0]?.id ?? "") }>
            {authors.map((author) => (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
            ))}
        </select>
        </div>
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
        <BookCatalog onClick={selectBook} />
        </div>
        <Footer />
        </>        
    );
}



export default AdminBooks;