import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBooks, getBooksWithAuthors, getReviews, getAuthorByName } from "../services/api.js";
import "../css/Bookpage.css";

function BookPage(props) {
  const params = useParams();

  const id = props.id ?? params.id;

  let book;
  let reviews = [];

  for (let i = 0; i < getBooksWithAuthors().length; i++) {
    if (getBooksWithAuthors()[i].id === id) {
      book = getBooksWithAuthors()[i];
      break;
    }
  }

  for (let i = 0; i < getReviews().length; i++) {
    if (getReviews()[i].bookId === id) {
      reviews.push(getReviews()[i]);
    }
  }

  if (book === undefined) {
    return (
      <>
        <Navbar />
        <style>{`
          .book-page {
            display: flex;
            justify-content: center;
            margin-block: 25vh;
            border: 1px solid grey;
            border-radius: 20px;
            box-shadow: 3px 10px 20px 2px rgba(0, 0, 0, 0.3);
            margin-inline: 35vw;
            padding-block: 5vh;
          }
        `}</style>
        <div className="book-page">
          <h2>Nepronadjena knjiga</h2>
        </div>
        <Footer />
      </>
    );
  } else {
    
    const authorID = getAuthorByName(book.firstName, book.lastName).id;
    
    return (
      <>
        <Navbar />
        <div className="book-page">
          <aside className="left-sidebar">
            <img src={book.images[0]} alt="Book Cover"/>
            <div className="book-author-price-format">
              <h4>AUTOR</h4>
              <h3 className="author-name"><Link to={`/author/${authorID}`}>
                {book.firstName} {book.lastName}
              </Link></h3>
              <h4>CENA</h4>
              <h3 className="book-price">{book.price} EUR</h3>
              <p>{book.format} izdanje</p>
            </div>
          </aside>
          <aside className="right-sidebar">
            <div className="main-book-info">
              <p className="book-genre">{book.genre}</p>
              <h1 className="book-title">{book.title}</h1>
              <p className="book-description">{book.description}</p>
            </div>
            <div className="book-additional-info">
              <div className="grid-item"><h4>ISBN</h4><p>{book.isbn}</p></div>
              <div className="grid-item"><h4>BROJ STRANA</h4><p>{book.pages}</p></div>
              <div className="grid-item"><h4>ZANR</h4><p>{book.genre}</p></div>
              <div className="grid-item"><h4>FORMAT</h4><p>{book.format}</p></div>
            </div>
            <div className="book-reviews">
              <h3>Komentari i recenzije</h3>
              <div className="list-of-reviews">
              {reviews.length === 0 ? (
                <p>Jos nema komentara za ovu knhigu</p>
              ) : (
                reviews.map((review) => (
                  <p>
                    {review.userId} - {review.text}
                  </p>
                ))
              )}
              </div>
            </div>
          </aside>
        </div>
        <Footer />
      </>
    );
  }
}

export default BookPage;
