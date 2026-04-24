import { Link } from "react-router-dom";
import "../css/Bookcard.css";

// function Bookcard({ className = "", book }) {
//     return (
//         <div className={`book-card ${className}`}>
//             <Link to={`/book/${book.id}`}>
//                 <img src={book.images[0]} alt={book.title} />
//             </Link>
//             <div className="book-card-info">
//                 <h4>{book.title}</h4>
//                 <Link to={`/author/${book.authorId}`}>
//                     <p>{`${book.firstName} ${book.lastName}`}</p>
//                 </Link>
//             </div>
//         </div>
//     );
// }

function Bookcard({ className_ = "", book, onClick }) {
  const isClickable = !!onClick;

  return (
    <div
      className={`book-card ${className_}`}
      onClick={onClick}
      style={{ cursor: isClickable ? "pointer" : "default" }}
    >
      {isClickable ? (
        <img src={book.images[0]} alt={book.title} />
      ) : (
        <Link to={`/book/${book.id}`}>
          <img src={book.images[0]} alt={book.title} />
        </Link>
      )}

      <div className="book-card-info">
        <h4>{book.title}</h4>

        {isClickable ? (
          <p>{`${book.firstName} ${book.lastName}`}</p>
        ) : (
          <Link to={`/author/${book.authorId}`}>
            <p>{`${book.firstName} ${book.lastName}`}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Bookcard;