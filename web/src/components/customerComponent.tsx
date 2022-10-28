import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCustomers } from "../utils/customer_api";
import TableComponent from "./tableComponent";

const CustomerComponent = () => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	useEffect(() => {
		fetchAllCustomers().then((res) => setData(res!.data));
	}, []);
	return data ? (
		<>
			<TableComponent headers={"customerHeaders"} data={data} />
			<button type="button" onClick={() => navigate("/customers/new")}>
				Create
			</button>
		</>
	) : (
		<></>
	);
};
export default CustomerComponent;
