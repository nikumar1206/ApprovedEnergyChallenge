import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../utils/product_api";
import TableComponent from "../tableComponent";

const ProductComponent = () => {
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		fetchAllProducts().then((res) => setData(res!.data));
	}, []);
	return data ? (
		<>
			<TableComponent headers={"productHeaders"} data={data} />
			<button type="button" onClick={() => navigate("/products/new")}>
				Create
			</button>
		</>
	) : (
		<></>
	);
};

export default ProductComponent;
