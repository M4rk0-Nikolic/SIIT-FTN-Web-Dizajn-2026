import { Link } from "react-router-dom"; //For moving to different pages
import { HashLink } from "react-router-hash-link"; // For mocing to partes of page using (hash) id 
import "../css/Navbar.css";
import profile from "../assets/profile.svg";
import { useState } from "react";
import { useLoggedInContext } from "../contexts/Loggedin.jsx";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { loggedIn, setLoggedIn, isLoggedIn } = useLoggedInContext();

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
			<div className="profile-button">
            <img src={profile} height= "45" width = "45" alt="Profil"/>
			</div>
		</nav>
	);
}

export default Navbar;
