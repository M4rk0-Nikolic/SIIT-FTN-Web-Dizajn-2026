import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BookPage() {
  const { id } = useParams();

  return (<>
  <Navbar />
  
  </>
);
}

export default BookPage;
