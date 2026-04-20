import "../css/Bookcard.css";

function Bookcard({ className = "", book }) {
    return (
        <div className={`book-card ${className}`}>
            <a href="">
            <img src={book.images[0]} alt={book.title} />
            </a>
            <div className="book-card-info">
                <h4>{book.title}</h4>
                <a><p>{`${book.firstName} ${book.lastName}`}</p></a>
            </div>
        </div>
    );
}

export default Bookcard;