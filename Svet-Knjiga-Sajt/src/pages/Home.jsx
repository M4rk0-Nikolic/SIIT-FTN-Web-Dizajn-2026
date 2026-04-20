import Hero from "../components/Hero.jsx";
import "../css/Downarrow.css"
import arrow from "../assets/down-arrow.svg"
import BookCatalog from "../components/Bookcatalog.jsx";
import Navbar from "../components/Navbar.jsx";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="down-arrow">
        <img width="50" height="50" src={arrow}/>
      </div>
      <BookCatalog />
    </>
  );
}

export default Home;
