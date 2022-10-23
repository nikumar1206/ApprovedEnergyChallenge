import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar-container">
			<NavLink to={"/customers"}>Customers</NavLink>
			<NavLink to={"/products"}>Products</NavLink>
			<NavLink to={"/orders"}>Orders</NavLink>
			<NavLink to={"/"}>Home</NavLink>
		</nav>
	);
};
export default Nav;
