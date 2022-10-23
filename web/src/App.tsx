import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/homeComponent";
import CustomerComponent from "./components/customerComponent";
import ProductComponent from "./components/productComponent";
import OrderComponent from "./components/orderComponent";
import NavComponent from "./components/navComponent";

const App = () => {
	return (
		<BrowserRouter>
			<NavComponent />
			<Routes>
				<Route path="/" element={<HomeComponent />}></Route>
				<Route path="/customers" element={<CustomerComponent />}></Route>
				<Route path="/products" element={<ProductComponent />}></Route>
				<Route path="/orders" element={<OrderComponent />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
