import "../css/Footer.css";
import reactLogo from "../assets/react.svg"

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="repo-info">
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} alt="React Logo" />
                </a>
                <a href="https://github.com/M4rk0-Nikolic/SIIT-FTN-Web-Dizajn-2026" target="_blank" rel="noopener noreferrer">
                <p>Sajt napravljen sa React 19</p>
                </a>
                </div>
                <p className="copyright">2026 - FTN <br /> Softversko Inzenjerstvo i informacione tehnologije</p>
                <div className="link-tree">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Svet Knjiga</Link>
                    <span> | </span>
                    <HashLink to="/#book-catalog">Katalog knjiga</HashLink>
                    <span> | </span>
                    <Link to="/" >Katalog Autora</Link>
                    <span> | </span>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Administator</Link>
                </div>
            </div>
        </footer>
    );
}



export default Footer;