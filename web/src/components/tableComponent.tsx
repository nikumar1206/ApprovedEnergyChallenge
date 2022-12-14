import { useNavigate } from "react-router-dom";

const TableComponent = ({
	data,
	headers,
}: {
	data: Array<Object>;
	headers: string;
}) => {
	const navigate = useNavigate();
	const customerHeaders = [
		"id",
		"name",
		"email",
		"phone",
		"address",
		"allOrders",
	];
	const productHeaders = ["id", "name", "type", "price", "expiration"];
	const orderHeaders = [
		"id",
		"quantity",
		"purchaseDate",
		"buyerId",
		"productId",
	];

	const determineTableHeaders = () => {
		if (headers == "customerHeaders") return customerHeaders;
		else if (headers == "orderHeaders") return orderHeaders;
		else return productHeaders;
	};

	const filterAssociations = (association: Array<Object>) => {
		return association.map((data: any) => data.id);
	};
	const determineTableData = (val: any) => {
		if (headers == "customerHeaders")
			return (
				<tr key={val.id} onClick={() => navigate(`/customers/${val.id}`)}>
					<td>{val.id}</td>
					<td>{val.name}</td>
					<td>{val.email}</td>
					<td>{val.phone}</td>
					<td>{val.address}</td>
					<td>
						<pre>
							{JSON.stringify(filterAssociations(val.allOrders), null, 2)}
						</pre>
					</td>
				</tr>
			);
		else if (headers == "productHeaders")
			return (
				<tr key={val.id} onClick={() => navigate(`/products/${val.id}`)}>
					<td>{val.id}</td>
					<td>{val.name}</td>
					<td>{val.type}</td>
					<td>${val.price}</td>
					<td>{val.expiration}</td>
				</tr>
			);
		else
			return (
				<tr key={val.id} onClick={() => navigate(`/orders/${val.id}`)}>
					<td>{val.id}</td>
					<td>{val.quantity}</td>
					<td>{val.purchaseDate}</td>
					<td>{val.buyer.id}</td>
					<td>{val.product.id}</td>
				</tr>
			);
	};
	return (
		<table>
			<thead>
				<tr>
					{determineTableHeaders().map((header): any => {
						return <th key={header}>{header}</th>;
					})}
				</tr>
			</thead>
			<tbody>{data.map((val: any) => determineTableData(val))}</tbody>
		</table>
	);
};
export default TableComponent;
