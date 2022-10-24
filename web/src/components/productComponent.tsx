import { useEffect, useState } from "react";
import { fetchAllProducts } from "../utils/product_api";

const ProductComponent = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetchAllProducts().then((res) => setData(res!.data));
	}, []);
	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default ProductComponent;
