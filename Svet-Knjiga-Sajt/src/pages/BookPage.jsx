import { useParams } from "react-router-dom";

function BookPage() {
  const { id } = useParams();

  return <h1>Book {id}</h1>;
}

export default BookPage;