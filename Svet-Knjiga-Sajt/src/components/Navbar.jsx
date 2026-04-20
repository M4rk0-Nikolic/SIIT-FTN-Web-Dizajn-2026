import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar({
	links = [
		{ to: "/", label: "Pocetna" },
		{ to: "/catalog", label: "Katalog" },
		{ to: "/authors", label: "Autori" },
        { to: "/profile", label: "Profil" },
	]
}) {
	return (
		<nav className="nav-bar" aria-label="Glavna navigacija">
			<div className="site-name">
				<Link to="/">Svet Knjiga</Link>
			</div>

			<ul className="nav-links">
				{links.map((item) => (
					<li key={item.to}>
						<Link to={item.to}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
