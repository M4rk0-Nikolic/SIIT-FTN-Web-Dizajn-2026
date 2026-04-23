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
						<HashLink to="/#book-catalog" className="underline-eff">Katalog knjiga</HashLink>
					</li>
                    <li>
						<Link to="/authors" className="underline-eff">Katalog autora</Link>
					</li>
                    <li>
                        <Link to="/" className="admin-link underline-eff">Administrator<Link to="/admin/books"><p className="firstp">Knjiga</p></Link><Link to="/admin/authors"><p className="secondp">Autora</p></Link></Link>
                    </li>
            </ul>
			<div className="profile-button">
			<Link to="/profile">
            	<img src={profile} height= "40" width = "40" alt="Profil"/>
				{isLoggedIn() ? (<><p className="firstp">Moja aktivnost</p><p className="secondp">Odjava</p></>) : (<><p className="firstp">Prijava</p><p className="secondp">Registracija</p></>)}
			</Link>
			</div>
		</nav>
	);
}

export default Navbar;
