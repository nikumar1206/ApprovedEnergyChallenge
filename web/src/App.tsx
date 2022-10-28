import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/homeComponent";
import CustomerComponent from "./components/customerComponent";
import ProductComponent from "./components/productComponent";
import OrderComponent from "./components/orderComponent";
import NavComponent from "./components/navComponent";
import NewCustomerForm from "./components/newCustomerForm";
import EditCustomerForm from "./components/editCustomerForm";
import NewProductForm from "./components/newProductForm";
import EditProductForm from "./components/editProductForm";
import NewOrderForm from "./components/newOrderForm";
import EditOrderForm from "./components/editOrderForm";

const App = () => {
	return (
		<BrowserRouter>
			<NavComponent />
			<Routes>
				<Route path="/" element={<HomeComponent />}></Route>
				<Route path="/customers/:id" element={<EditCustomerForm />}></Route>
				<Route path="/customers/new" element={<NewCustomerForm />}></Route>
				<Route path="/customers" element={<CustomerComponent />}></Route>

				<Route path="/products/:id" element={<EditProductForm />}></Route>
				<Route path="/products/new" element={<NewProductForm />}></Route>
				<Route path="/products" element={<ProductComponent />}></Route>

				<Route path="/orders/:id" element={<EditOrderForm />}></Route>
				<Route path="/orders/new" element={<NewOrderForm />}></Route>
				<Route path="/orders" element={<OrderComponent />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
