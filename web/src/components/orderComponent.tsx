import { useEffect, useState } from "react";
import { fetchAllOrders } from "../utils/order_api";

const OrderComponent = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetchAllOrders().then((res) => setData(res!.data));
	}, []);
	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default OrderComponent;
