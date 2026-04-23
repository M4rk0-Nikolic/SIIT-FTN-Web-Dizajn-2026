import Navbar from "../components/Navbar";
import Footer from "../component/Footer"
import BookCatalog from "../components/Bookcatalog";
import { useLoggedInContext } from "../contexts/Loggedin.jsx";

function AdminBooks() {

    const { loggedIn, setLoggedIn, isLoggedIn } = useLoggedInContext();

    return (<>
        <Navbar />
        <BookCatalog />
        <Footer />
        </>        
    );
}


export default AdminBooks;