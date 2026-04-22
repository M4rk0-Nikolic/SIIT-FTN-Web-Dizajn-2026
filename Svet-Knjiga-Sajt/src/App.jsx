import "./css/App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage.jsx";
import { LoggedInProvider } from "./contexts/Loggedin.jsx";


function App() {
  return (
    <LoggedInProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/author/:id" element={<p>Nista ovde</p>} />
        <Route path="*" element={<p>Stranica ne pronadjena</p>} />
      </Routes>
    </LoggedInProvider>
  );
}

export default App;
