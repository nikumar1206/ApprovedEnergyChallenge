import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders } from "../utils/order_api";
import TableComponent from "./tableComponent";

const OrderComponent = () => {
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		fetchAllOrders().then((res) => setData(res!.data));
	}, []);
	return data ? (
		<>
			<TableComponent headers={"orderHeaders"} data={data} />
			<button type="button" onClick={() => navigate("/orders/new")}>
				Create
			</button>
		</>
	) : (
		<></>
	);
};

export default OrderComponent;
