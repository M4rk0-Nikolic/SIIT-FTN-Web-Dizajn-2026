import { Link } from "react-router-dom";
import "../css/Bookcard.css";

function Bookcard({ className = "", book }) {
    return (
        <div className={`book-card ${className}`}>
            <Link to={`/book/${book.id}`}>
                <img src={book.images[0]} alt={book.title} />
            </Link>
            <div className="book-card-info">
                <h4>{book.title}</h4>
                <Link to={`/author/${book.authorId}`}>
                    <p>{`${book.firstName} ${book.lastName}`}</p>
                </Link>
            </div>
        </div>
    );
}

export default Bookcard;