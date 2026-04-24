import "./css/App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import BookPage from "./pages/BookPage.jsx";
import { LoggedInProvider } from "./contexts/Loggedin.jsx";
import AdminBooks from "./pages/Adminbooks.jsx";
import { useEffect } from "react";
import LoginRegister from "./pages/Loginregister.jsx";


function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    };

    window.scrollTo(0, 0);
  }, [pathname, hash]);
  //Brings window to top unless it has a hash
  //Bug came out of nowhere idk
  //GADNO JAKO GADNO

  return (
    <LoggedInProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/author/:id" element={<p>Nista ovde</p>} />
        <Route path="/authors" element={<p>Nista ovde</p>} />
        <Route path="/admin/books" element={<AdminBooks />} />
        <Route path="/admin/authors" element={<p>Nista ovde</p>} />
        <Route path="/profile" element={<p>Nista ovde</p>} />
        <Route path="/profile/:type" element={<LoginRegister />} />
        <Route path="*" element={<p>Stranica ne pronadjena</p>} />
      </Routes>
    </LoggedInProvider>
  );
}

export default App;
