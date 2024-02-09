import style from "./NavBar.module.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<Link to="/">
				<h1 className={style.titulo}>My Ecommerce</h1>
			</Link>
			<div>
				<NavLink to={`/category/celular`} className={({ isActive }) => isActive ? "ActiveOption" : "Option" } >
					Celulares{" "}
				</NavLink>
				<NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? "ActiveOption" : "Option" } >
					Notebooks{" "}
				</NavLink>
				<NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? "ActiveOption" : "Option" } >
					Tablets
				</NavLink>
			</div>
			<CartWidget count={0} />
		</nav>
	);
};

export default NavBar;
