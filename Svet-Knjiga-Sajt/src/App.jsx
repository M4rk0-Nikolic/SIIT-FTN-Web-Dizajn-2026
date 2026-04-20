import "./css/App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
