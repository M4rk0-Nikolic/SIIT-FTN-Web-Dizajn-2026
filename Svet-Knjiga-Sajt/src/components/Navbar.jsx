import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar({
	brand = "Svet Knjiga",
	links = [
		{ to: "/", label: "Pocetna" },
		{ to: "/catalog", label: "Katalog" },
		{ to: "/authors", label: "Autori" },
	],
}) {
	return (
		<nav className="nav-bar" aria-label="Glavna navigacija">
			<div className="nav-brand">
				<Link to="/">{brand}</Link>
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
