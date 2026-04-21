import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBooks } from "../services/api.js";
import "../css/BookPage.css";

function BookPage() {
  const { id } = useParams();

  const book = getBooks()

  return (
    <>
      <Navbar />
      <div className="book-page">
        <aside className="left-sidebar">
          <img
            src={`https://picsum.photos/400/600?random=${id}`}
            alt="Book Cover"
          />
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default BookPage;
