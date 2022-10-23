import { useEffect, useState } from "react";
import { fetchAllCustomers } from "../utils/customer_api";

const CustomerComponent = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetchAllCustomers().then((res) => setData(res!.data));
	}, []);
	return (
		<>
			<h1>{JSON.stringify(data, null, 2)}</h1>
		</>
	);
};
export default CustomerComponent;
