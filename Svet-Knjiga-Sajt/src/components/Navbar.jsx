import { Link } from "react-router-dom"; //For moving to different pages
import { HashLink } from "react-router-hash-link"; // For mocing to partes of page using (hash) id 
import "../css/Navbar.css";
import profile from "../assets/profile.svg";

function Navbar() {
	return (
		<nav className="nav-bar" aria-label="Glavna navigacija">
			<div className="site-name">
				<Link to="/">Svet Knjiga</Link>
			</div>

			<ul className="nav-links">
					<li>
						<HashLink to="/#book-catalog">Katalog knjiga</HashLink>
					</li>
                    <li>
						<Link to="/">Katalog autora</Link>
					</li>
                    <li>
                        <Link to="/">Administrator</Link>
                    </li>
            </ul>

            <img src={profile} height= "50" width = "50" alt="Profil"/>
		</nav>
	);
}

export default Navbar;
