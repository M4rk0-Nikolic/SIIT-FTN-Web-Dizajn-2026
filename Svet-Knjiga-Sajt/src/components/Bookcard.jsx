import "../css/Bookcard.css";

function Bookcard({ className = "", book }) {
    return (
        <div className={`book-card ${className}`}>
            <a href="">
            <img src={book.image} alt={book.title} />
            </a>
            <div className="book-card-info">
                <h4>{book.title}</h4>
                <a><p>{book.author}</p></a>
            </div>
        </div>
    );
}

export default Bookcard;