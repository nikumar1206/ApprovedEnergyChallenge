import { NavLink } from "react-router-dom";
import Home from "./home";

const Nav = () => {
	return (
		<nav className="navbar-container">
			<NavLink to={Home}>Home</NavLink>
			<NavLink to={Customer}>Customers</NavLink>
			<NavLink to={Product}>Products</NavLink>
			<NavLink to={Order}>Orders</NavLink>
		</nav>
	);
};
export default Nav;
